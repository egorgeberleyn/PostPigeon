namespace PostPigeon.Core.Models.Base;

public class Entity
{
    public Guid Id { get; init; } 
    
    protected Entity(Guid id)
    {
        Id = id;
    }

    protected static Guid CreateId() => Guid.NewGuid();
}