using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using PostPigeon.Core.Errors.Auth;
using PostPigeon.Core.Models;
using PostPigeon.Infra.Auth.Entities;
using PostPigeon.Infra.Persistence.Repositories.Interfaces;

namespace PostPigeon.Infra.Auth;

public class JwtTokenizer : IJwtTokenizer
{
    private readonly JwtSettings _jwtSettings;
    private readonly IRefreshTokensRepository _refreshTokensRepository;
    private readonly ILogger<JwtTokenizer> _logger;
    
    private readonly JsonWebTokenHandler _tokenHandler = new();

    public JwtTokenizer(IOptions<JwtSettings> jwtSettings, IRefreshTokensRepository refreshTokensRepository,
        ILogger<JwtTokenizer> logger)
    {
        _refreshTokensRepository = refreshTokensRepository;
        _logger = logger;
        _jwtSettings = jwtSettings.Value;
    }

    public async Task<TokenPair> GenerateTokenPairAsync(User user)
    {
        var jwtSecret = Encoding.ASCII.GetBytes(_jwtSettings.Secret);

        var accessToken = CreateAccessToken(user.Id, jwtSecret);

        //Add refresh token to db
        var refreshTokenEntity = RefreshToken.Create(user.Id,
            DateTime.UtcNow.AddDays(_jwtSettings.RefreshTokenLifetime));
        await _refreshTokensRepository.CreateAsync(refreshTokenEntity);

        var refreshToken = CreateRefreshToken(user.Id, jwtSecret, refreshTokenEntity);

        return new TokenPair(accessToken, refreshToken);
    }

    public async Task<TokenPair> RefreshTokenAsync(string refreshToken)
    {
        var jwtSecret = Encoding.ASCII.GetBytes(_jwtSettings.Secret);
        var tokenValidationResult = await ValidateToken(refreshToken, jwtSecret);

        // Check if token has already been used 
        var jtiClaim = (string)tokenValidationResult.Claims["jti"];
        var refreshTokenId = Guid.Parse(jtiClaim);
        var refreshTokenEntity = await _refreshTokensRepository.GetAsync(refreshTokenId);
        if (refreshTokenEntity is null)
            throw new TokenAlreadyUsedException("Refresh token уже был использован");

        // Remove a token from the database so that it can no longer be used
        await _refreshTokensRepository.DeleteAsync(refreshTokenId);

        var userId = (string)tokenValidationResult.Claims["sub"];
        var newAccessToken = CreateAccessToken(Guid.Parse(userId), jwtSecret);

        // Save refresh token info
        var newRefreshTokenEntity =
            RefreshToken.Create(Guid.Parse(userId), DateTime.UtcNow.AddDays(_jwtSettings.RefreshTokenLifetime));
        await _refreshTokensRepository.CreateAsync(newRefreshTokenEntity);

        var newRefreshToken = CreateRefreshToken(Guid.Parse(userId), jwtSecret, refreshTokenEntity);

        // Return new token pair back to user
        var tokenPair = new TokenPair(newAccessToken, newRefreshToken);
        return tokenPair;
    }

    private string CreateAccessToken(Guid userId, byte[] secret)
    {
        var accessTokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[] { new Claim("sub", userId.ToString()) }),
            Expires = DateTime.UtcNow.AddMinutes(_jwtSettings.AccessTokenLifetime),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(secret),
                SecurityAlgorithms.HmacSha256Signature),
            Audience = _jwtSettings.Audience,
            Issuer = _jwtSettings.Issuer
        };

        var accessToken = _tokenHandler.CreateToken(accessTokenDescriptor);
        return accessToken;
    }

    private string CreateRefreshToken(Guid userId, byte[] secret, RefreshToken refreshTokenEntity)
    {
        var refreshTokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim("sub", userId.ToString()),
                new Claim("jti", refreshTokenEntity.Id.ToString())
            }),
            Expires = refreshTokenEntity.ExpirationTime,
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(secret),
                SecurityAlgorithms.HmacSha256Signature),
            Audience = _jwtSettings.Audience,
            Issuer = _jwtSettings.Issuer
        };

        var refreshToken = _tokenHandler.CreateToken(refreshTokenDescriptor);
        return refreshToken;
    }

    private async Task<TokenValidationResult> ValidateToken(string token, byte[] jwtSecret)
    {
        var tokenValidationParameters = new TokenValidationParameters
        {
            RequireSignedTokens = true,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(jwtSecret),

            ValidateAudience = true,
            ValidateIssuer = true,
            ValidAudience = _jwtSettings.Audience,
            ValidIssuer = _jwtSettings.Issuer,

            RequireExpirationTime = true,
            ValidateLifetime = true,
            ClockSkew = TimeSpan.Zero
        };
        
        try
        {
            var tokenValidationResult = await _tokenHandler.ValidateTokenAsync(token, tokenValidationParameters);
            return tokenValidationResult;
        }
        catch (Exception)
        {
            _logger.LogError("Получен неверный refresh token (token: {RefreshToken}", token);
            throw new InvalidTokenException("Получен неверный refresh token");
        }
    }
}