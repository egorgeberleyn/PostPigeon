using Grpc.Core;
using Microsoft.IdentityModel.JsonWebTokens;
using PostPigeon.Core.Models;
using PostPigeon.Infra.Persistence.Repositories.Interfaces;

namespace PostPigeon.Infra.Auth;

public class CurrentUserContext : IUserContext
{
    private readonly IUsersRepository _usersRepository;

    public CurrentUserContext(IUsersRepository usersRepository)
    {
        _usersRepository = usersRepository;
    }

    public async Task<User?> GetCurrentUserAsync(ServerCallContext context)
    {
        var tokenStr = context.RequestHeaders.GetValue("Authorization")
            ?.Replace("bearer ", string.Empty, StringComparison.OrdinalIgnoreCase);
        var jwtToken = new JsonWebToken(tokenStr);
        var userIdStr = jwtToken.Subject;
        
        if (!Guid.TryParse(userIdStr, out var userId))
            throw new InvalidCastException("Invalid GUID format");

        var user = await _usersRepository.GetAsync(userId);
        return user;
    }
}