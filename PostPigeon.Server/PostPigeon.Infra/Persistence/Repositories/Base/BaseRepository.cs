using MongoDB.Driver;
using PostPigeon.Infra.Persistence.Extensions;
using PostPigeon.Core.Models.Base;

namespace PostPigeon.Infra.Persistence.Repositories.Base;

public abstract class BaseRepository<T> : IRepository<T>
    where T : Entity
{
    protected readonly IMongoCollection<T> Collection;

    protected BaseRepository(DbSettings dbSettings, string collectionName)
    {
        var mongoClient = new MongoClient(
            dbSettings.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(
            dbSettings.DatabaseName);
        Collection = mongoDatabase.GetCollection<T>(collectionName);
    }
    
    public Task<List<T>> GetAllAsync() =>
        Collection.ToListAsync();

    public async Task<T?> GetAsync(Guid id) =>
        await Collection.FirstOrDefaultAsync(entity => entity.Id == id);
    
    public Task CreateAsync(T newEntity) =>
        Collection.InsertOneAsync(newEntity);

    public async Task UpdateAsync(Guid id, T updatedEntity) =>
        await Collection.ReplaceOneAsync(entity => entity.Id == id, updatedEntity);
    
    public Task<DeleteResult> DeleteAsync(Guid id) =>
        Collection.DeleteOneAsync(entity => entity.Id == id);
}