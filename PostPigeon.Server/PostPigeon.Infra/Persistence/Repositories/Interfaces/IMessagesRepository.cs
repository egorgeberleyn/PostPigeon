using PostPigeon.Core.Models;
using PostPigeon.Infra.Persistence.Repositories.Base;

namespace PostPigeon.Infra.Persistence.Repositories.Interfaces;

public interface IMessagesRepository : IRepository<Message>
{
    
}