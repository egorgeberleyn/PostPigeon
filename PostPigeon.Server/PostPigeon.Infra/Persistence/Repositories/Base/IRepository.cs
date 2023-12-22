using MongoDB.Driver;
using PostPigeon.Core.Models.Base;

namespace PostPigeon.Infra.Persistence.Repositories.Base;

public interface IRepository<T>
    where T : Entity
{
    Task<List<T>> GetAllAsync();
    Task<T?> GetAsync(Guid id);

    Task CreateAsync(T newEntity);
    Task UpdateAsync(Guid id, T updatedEntity);
    Task<DeleteResult> DeleteAsync(Guid id);
}