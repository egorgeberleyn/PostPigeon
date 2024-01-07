using PostPigeon.Core.Models.Base;

namespace PostPigeon.Core.Models;

public class User : Entity
{
    private User(Guid id, string username, string passwordHash) : base(id)
    {
        Username = username;
        PasswordHash = passwordHash;
    }

    public string Username { get; private set; } 

    public byte[]? Avatar { get; private set; }
    
    public string PasswordHash { get; private set; }

    public static User Create(string name, string passwordHash) =>
        new (CreateId(), name, passwordHash);

    public void SetAvatar(byte[] imgBytes)
    {
        Avatar = imgBytes;
    }
}