using Microsoft.Extensions.Options;
using MongoDB.Driver;
using PostPigeon.DAL.DbRepositories.Interfaces;
using PostPigeon.Domain.Models;

namespace PostPigeon.DAL.DbRepositories;

public class UsersRepository : IUsersRepository
{
    private readonly IMongoCollection<User> _userCollection;

    public UsersRepository(IOptions<ArsysChatDatabaseSettings> dbSettings)
    {
        var mongoClient = new MongoClient(
            dbSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            dbSettings.Value.DatabaseName);

        _userCollection = mongoDatabase.GetCollection<User>(
            dbSettings.Value.UsersCollectionName);
    }

    public async Task<List<User>> GetAllAsync() =>
        await _userCollection.Find(_ => true).ToListAsync(); 
    
    public async Task<User?> GetAsync(string name) =>
        await _userCollection.Find(x => x.Name == name).FirstOrDefaultAsync();

    public async Task CreateAsync(User newUser) =>
        await _userCollection.InsertOneAsync(newUser);
    
    public async Task DeleteAsync(string id) =>
        await _userCollection.DeleteOneAsync(x => x.Id == id);
}