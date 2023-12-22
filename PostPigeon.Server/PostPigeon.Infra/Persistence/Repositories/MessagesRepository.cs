using PostPigeon.Core.Models;
using PostPigeon.Infra.Persistence.Repositories.Base;
using PostPigeon.Infra.Persistence.Repositories.Interfaces;

namespace PostPigeon.Infra.Persistence.Repositories;

public class MessagesRepository : BaseRepository<Message>, IMessagesRepository
{
    public MessagesRepository(DbSettings dbSettings) 
        : base(dbSettings, dbSettings.MessagesCollectionName)
    {
    }
}