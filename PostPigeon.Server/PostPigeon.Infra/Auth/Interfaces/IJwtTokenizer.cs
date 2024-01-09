using PostPigeon.Core.Models;
using PostPigeon.Infra.Auth.Entities;

namespace PostPigeon.Infra.Auth;

public interface IJwtTokenizer
{
    Task<TokenPair> GenerateTokenPairAsync(User user);
    Task<TokenPair> RefreshTokenAsync(string refreshToken);
}