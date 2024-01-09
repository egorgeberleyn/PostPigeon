using Grpc.Core;
using PostPigeon.Core.Models;

namespace PostPigeon.Infra.Auth;

public interface IUserContext
{
    Task<User?> GetCurrentUserAsync(ServerCallContext context);
}