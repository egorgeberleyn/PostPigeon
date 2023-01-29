using PostPigeon.Domain.Models.Base;

namespace PostPigeon.Domain.Models;

public class User : Entity
{
    private User(string id, string name, string avatarUrl) : base(id)
    {
        Name = name;
        AvatarUrl = avatarUrl;
    }

    public string Name { get; private set; } 

    public string AvatarUrl { get; private set; }

    public static User Create(string name, string avatarUrl) =>
        new (CreateId(), name, avatarUrl);
}