using Microsoft.Extensions.Options;
using MongoDB.Driver;
using PostPigeon.DAL.Persistence.Extensions;
using PostPigeon.Domain.Models.Base;

namespace PostPigeon.DAL.Persistence.Repositories.Base;

public abstract class BaseRepository<T> : IRepository<T>
    where T : Entity
{
    private readonly DbSettings _dbSettings;
    protected readonly IMongoCollection<T> Collection;

    protected BaseRepository(DbSettings dbSettings, string collectionName)
    {
        _dbSettings = dbSettings;
        var mongoClient = new MongoClient(
            dbSettings.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(
            dbSettings.DatabaseName);
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