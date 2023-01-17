using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PostPigeon.Domain.Models;

public class Message
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    
    public string UserId { get; set; } = null!;

    public string Text { get; set; } = null!;
    
    public DateTime Time { get; set; }
}