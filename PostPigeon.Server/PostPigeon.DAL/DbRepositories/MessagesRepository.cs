using Microsoft.Extensions.Options;
using PostPigeon.DAL.DbRepositories.Interfaces;
using PostPigeon.Domain.Models;
using MongoDB.Driver;

namespace PostPigeon.DAL.DbRepositories;

public class MessagesRepository : IMessagesRepository
{
    private readonly IMongoCollection<Message> _messageCollection;

    public MessagesRepository(IOptions<ArsysChatDatabaseSettings> dbSettings)
    {
        var mongoClient = new MongoClient(
            dbSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            dbSettings.Value.DatabaseName);

        _messageCollection = mongoDatabase.GetCollection<Message>(
            dbSettings.Value.ChatMessagesCollectionName);
    }

    public async Task<List<Message>> GetAllAsync() =>
        await _messageCollection.Find(_ => true).ToListAsync();
    
    public async Task<Message> GetAsync(string id) =>
        await _messageCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Message newMessage) =>
        await _messageCollection.InsertOneAsync(newMessage);
    
    public async Task DeleteAsync(string id) =>
        await _messageCollection.DeleteOneAsync(x => x.Id == id);
}