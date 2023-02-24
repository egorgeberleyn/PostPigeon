using Microsoft.Extensions.Options;
using PostPigeon.DAL.Persistence.Extensions;
using PostPigeon.DAL.Persistence.Repositories.Base;
using PostPigeon.DAL.Persistence.Repositories.Interfaces;
using PostPigeon.Domain.Models;

namespace PostPigeon.DAL.Persistence.Repositories;

public class UsersRepository : BaseRepository<User>, IUsersRepository
{
    public UsersRepository(DbSettings dbSettings) 
        : base(dbSettings, dbSettings.UsersCollectionName)
    {
    }

    public async Task<User?> GetByNameAsync(string name) =>
        await Collection.FirstOrDefaultAsync(user => user.Name == name);
}