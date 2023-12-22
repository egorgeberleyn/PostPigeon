using PostPigeon.Core.Models.Base;

namespace PostPigeon.Infra.Auth.Entities;

public class RefreshToken : Entity
{
    public Guid UserId { get; init; }
    
    public DateTime ExpirationTime { get; init; }
    
    private RefreshToken(Guid id, Guid userId, DateTime expirationTime) : base(id)
    {
        UserId = userId;
        ExpirationTime = expirationTime;
    }

    public static RefreshToken Create(Guid userId, DateTime expirationTime) =>
        new(CreateId(), userId, expirationTime);
}