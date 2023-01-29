using Microsoft.Extensions.Options;
using PostPigeon.DAL.Persistence.Repositories.Base;
using PostPigeon.DAL.Persistence.Repositories.Interfaces;
using PostPigeon.Domain.Models;

namespace PostPigeon.DAL.Persistence.Repositories;

public class MessagesRepository : BaseRepository<Message>, IMessagesRepository
{
    public MessagesRepository(IOptions<DbSettings> dbSettings, string collectionName) 
        : base(dbSettings, collectionName)
    {
    }
}