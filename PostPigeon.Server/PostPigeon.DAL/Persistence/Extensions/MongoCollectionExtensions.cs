using System.Linq.Expressions;
using MongoDB.Driver;
using PostPigeon.Domain.Models.Base;

namespace PostPigeon.DAL.Persistence.Extensions;

public static class MongoCollectionExtensions
{
    public static List<T> ToList<T>(this IMongoCollection<T> collection, Expression<Func<T, bool>>? predicate = null) 
        where T : Entity
        => collection.Find(predicate ?? (_ => true)).ToList();
    
    public static T FirstOrDefault<T>(this IMongoCollection<T> collection, Expression<Func<T, bool>>? predicate = null) 
        where T : Entity
        => collection.Find(predicate ?? (_ => true)).FirstOrDefault();
    
    public static Task<List<T>> ToListAsync<T>(this IMongoCollection<T> collection, Expression<Func<T, bool>>? predicate = null) 
        where T : Entity
        =>  collection.Find(predicate ?? (_ => true)).ToListAsync();
    
    public static Task<T> FirstOrDefaultAsync<T>(this IMongoCollection<T> collection, Expression<Func<T, bool>>? predicate = null) 
        where T : Entity
        => collection.Find(predicate ?? (_ => true)).FirstOrDefaultAsync();
}