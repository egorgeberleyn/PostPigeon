using PostPigeon.Core.Models.Base;

namespace PostPigeon.Core.Models;

public class User : Entity
{
    private User(Guid id, string name, string avatarUrl, string passwordHash) : base(id)
    {
        Name = name;
        AvatarUrl = avatarUrl;
        PasswordHash = passwordHash;
    }

    public string Name { get; private set; } 

    public string AvatarUrl { get; private set; }
    
    public string PasswordHash { get; private set; }

    public static User Create(string name, string avatarUrl, string passwordHash) =>
        new (CreateId(), name, avatarUrl, passwordHash);
}