using PostPigeon.Core.Models;
using PostPigeon.Infra.Persistence.Repositories.Base;

namespace PostPigeon.Infra.Persistence.Repositories.Interfaces;

public interface IUsersRepository : IRepository<User>
{
    Task<User?> GetByNameAsync(string name);
}