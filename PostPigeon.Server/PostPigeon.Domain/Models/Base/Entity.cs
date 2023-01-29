namespace PostPigeon.Domain.Models.Base;

public abstract class Entity
{
    public string Id { get; init; } 

    protected Entity(string id)
    {
        Id = id;
    }

    protected static string CreateId() => Guid.NewGuid().ToString();
}