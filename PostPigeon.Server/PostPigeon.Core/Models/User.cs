using PostPigeon.Core.Models.Base;

namespace PostPigeon.Core.Models;

public class User : Entity
{
    private User(Guid id, string username, string passwordHash, string email) : base(id)
    {
        Username = username;
        PasswordHash = passwordHash;
        Email = email;
    }

    public string Username { get; private set; } 
    
    public string Email { get; private set; }

    public byte[]? Avatar { get; private set; }
    
    public string PasswordHash { get; private set; }

    public static User Create(string name, string passwordHash, string email) =>
        new (CreateId(), name, passwordHash, email);

    public User Update(string username, string email, string? passwordHash)
    {
        Username = username;
        Email = email;
        if (!string.IsNullOrEmpty(passwordHash))
            PasswordHash = passwordHash;
        
        return this;
    }

    public void SetAvatar(byte[] imgBytes)
    {
        Avatar = imgBytes;
    }
}