using PostPigeon.Domain.Models.Base;

namespace PostPigeon.Domain.Models;

public class Message : Entity
{
    private Message(string id, string userId, string text) : base(id)
    {
        UserId = userId;
        Text = text;
        Time = DateTime.Now;
    }
    
    public string UserId { get; private set; }

    public string Text { get; private set; }
    
    public DateTime Time { get; private set; }

    public static Message Create(string userId, string text) => 
        new (CreateId(), userId, text);
}