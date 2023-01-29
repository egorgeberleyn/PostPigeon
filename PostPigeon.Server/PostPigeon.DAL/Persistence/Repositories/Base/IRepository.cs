using MongoDB.Driver;
using PostPigeon.Domain.Models.Base;

namespace PostPigeon.DAL.Persistence.Repositories.Base;

public interface IRepository<T>
    where T : Entity
{
    Task<List<T>> GetAllAsync();
    Task<T?> GetAsync(string id);

    Task CreateAsync(T newEntity);
    Task UpdateAsync(string id, T updatedEntity);
    Task<DeleteResult> DeleteAsync(string id);
}