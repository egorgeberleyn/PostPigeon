using Grpc.Core;
using Mapster;
using PostPigeon.Core.Errors.Auth;
using PostPigeon.Core.Models;
using PostPigeon.Infra.Auth;
using PostPigeon.Infra.Persistence.Repositories.Interfaces;
using BC = BCrypt.Net.BCrypt;

namespace PostPigeon.Server.Services;

public class AuthService : Auth.AuthBase
{
    private readonly IUsersRepository _usersRepository;
    private readonly IJwtTokenizer _jwtTokenizer;

    public AuthService(IUsersRepository usersRepository, IJwtTokenizer jwtTokenizer)
    {
        _usersRepository = usersRepository;
        _jwtTokenizer = jwtTokenizer;
    }

    public override async Task<TokenPair> Register(RegisterRequest request, ServerCallContext context)
    {
        if (await _usersRepository.GetByNameAsync(request.Username) is not null)
            throw new UserExistsException("User with same name already exists");

        var passwordHash = BC.HashPassword(request.Password);
        var newUser = User.Create(request.Username, passwordHash, request.Email);
        await _usersRepository.CreateAsync(newUser);
        
        var tokens = await _jwtTokenizer.GenerateTokenPairAsync(newUser);
        return tokens.Adapt<TokenPair>();
    }

    public override async Task<TokenPair> Login(LoginRequest request, ServerCallContext context)
    {
        var user = await _usersRepository.GetByNameAsync(request.Username);
        
        if (user is null) throw new UserNotFoundException("User not found");
        if (!BC.Verify(request.Password, user.PasswordHash))
            throw new InvalidCredentialsException("Invalid account credentials");

        var tokens = await _jwtTokenizer.GenerateTokenPairAsync(user);
        return tokens.Adapt<TokenPair>();
    }

    public override async Task<TokenPair> RefreshToken(RefreshTokenRequest request, ServerCallContext context)
    {
        var tokens = await _jwtTokenizer.RefreshTokenAsync(request.RefreshToken);
        return tokens.Adapt<TokenPair>();
    }
}