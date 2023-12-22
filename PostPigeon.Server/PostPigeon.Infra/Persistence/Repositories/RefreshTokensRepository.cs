using PostPigeon.Infra.Auth.Entities;
using PostPigeon.Infra.Persistence.Repositories.Base;
using PostPigeon.Infra.Persistence.Repositories.Interfaces;

namespace PostPigeon.Infra.Persistence.Repositories;

public class RefreshTokensRepository : BaseRepository<RefreshToken>, IRefreshTokensRepository
{
    public RefreshTokensRepository(DbSettings dbSettings) 
        : base(dbSettings, dbSettings.RefreshTokensCollectionName)
    {
    }
}