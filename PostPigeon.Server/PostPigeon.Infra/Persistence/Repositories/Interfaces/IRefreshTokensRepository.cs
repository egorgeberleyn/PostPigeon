using PostPigeon.Infra.Auth.Entities;
using PostPigeon.Infra.Persistence.Repositories.Base;

namespace PostPigeon.Infra.Persistence.Repositories.Interfaces;

public interface IRefreshTokensRepository : IRepository<RefreshToken>
{
    
}