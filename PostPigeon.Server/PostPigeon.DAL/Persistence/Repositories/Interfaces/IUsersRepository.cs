using PostPigeon.DAL.Persistence.Repositories.Base;
using PostPigeon.Domain.Models;

namespace PostPigeon.DAL.Persistence.Repositories.Interfaces;

public interface IUsersRepository : IRepository<User>
{
    Task<User?> GetByNameAsync(string name);
}