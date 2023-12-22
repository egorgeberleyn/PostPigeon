using PostPigeon.Core.Models.Base;

namespace PostPigeon.Core.Models;

public class Message : Entity
{
    private Message(Guid id, string userId, string text) : base(id)
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