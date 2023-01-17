using PostPigeon.Domain.Models;

namespace PostPigeon.DAL.DbRepositories.Interfaces;

public interface IMessagesRepository
{
    Task<List<Message>> GetAllAsync();
    Task<Message> GetAsync(string id);

    Task CreateAsync(Message newMessage);
    Task DeleteAsync(string id);
}