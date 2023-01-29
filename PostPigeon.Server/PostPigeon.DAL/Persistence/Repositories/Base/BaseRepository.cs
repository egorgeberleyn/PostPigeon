using Microsoft.Extensions.Options;
using MongoDB.Driver;
using PostPigeon.DAL.Persistence.Extensions;
using PostPigeon.Domain.Models.Base;

namespace PostPigeon.DAL.Persistence.Repositories.Base;

public abstract class BaseRepository<T> : IRepository<T>
    where T : Entity
{
    protected readonly IMongoCollection<T> Collection;

    protected BaseRepository(IOptions<DbSettings> dbSettings, string collectionName)
    {
        var mongoClient = new MongoClient(
            dbSettings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(
            dbSettings.Value.DatabaseName);
        Collection = mongoDatabase.GetCollection<T>(collectionName);
    }
    
    public async Task<List<T>> GetAllAsync() =>
        await Collection.ToListAsync(); 
    
    public async Task<T?> GetAsync(string id) =>
        await Collection.FirstOrDefaultAsync(entity => entity.Id == id);

    public async Task CreateAsync(T newEntity) =>
        await Collection.InsertOneAsync(newEntity);

    public async Task UpdateAsync(string id, T updatedEntity) =>
        await Collection.ReplaceOneAsync(entity => entity.Id == id, updatedEntity);
    
    public async Task<DeleteResult> DeleteAsync(string id) =>
        await Collection.DeleteOneAsync(entity => entity.Id == id);
}