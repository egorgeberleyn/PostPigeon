using System.Security.Claims;
using Grpc.Core;
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
        var userIdStr = context.GetHttpContext().User
            .FindFirst(ClaimTypes.NameIdentifier)?.Value;
        
        if (!Guid.TryParse(userIdStr, out var userId))
            throw new InvalidCastException("Invalid GUID format");

        var user = await _usersRepository.GetAsync(userId);
        return user;
    }
}