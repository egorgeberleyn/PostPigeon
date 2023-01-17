using PostPigeon.Domain.Models;

namespace PostPigeon.DAL.DbRepositories.Interfaces;

public interface IUsersRepository
{
    Task<List<User>> GetAllAsync();
    Task<User?> GetAsync(string name);

    Task CreateAsync(User newUser);
    Task DeleteAsync(string id);
}