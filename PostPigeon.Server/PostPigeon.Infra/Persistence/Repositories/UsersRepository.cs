using PostPigeon.Infra.Persistence.Extensions;
using PostPigeon.Core.Models;
using PostPigeon.Infra.Persistence.Repositories.Base;
using PostPigeon.Infra.Persistence.Repositories.Interfaces;

namespace PostPigeon.Infra.Persistence.Repositories;

public class UsersRepository : BaseRepository<User>, IUsersRepository
{
    public UsersRepository(DbSettings dbSettings) 
        : base(dbSettings, dbSettings.UsersCollectionName)
    {
    }

    public async Task<User?> GetByNameAsync(string name) =>
        await Collection.FirstOrDefaultAsync(user => user.Username == name);
}