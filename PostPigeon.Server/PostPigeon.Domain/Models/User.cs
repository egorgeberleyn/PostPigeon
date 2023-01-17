﻿using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PostPigeon.Domain.Models;

public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public string Name { get; set; } = null!;

    public string AvatarUrl { get; set; } = null!;
}