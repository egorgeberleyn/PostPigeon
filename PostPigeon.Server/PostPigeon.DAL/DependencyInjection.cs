using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Conventions;
using MongoDB.Bson.Serialization.Serializers;
using PostPigeon.DAL.Persistence.Repositories;
using PostPigeon.DAL.Persistence.Repositories.Interfaces;

namespace PostPigeon.DAL;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services,
        ConfigurationManager configuration)
    {
        services
            .AddPersistence(configuration);
        return services;
    }
    
    private static IServiceCollection AddPersistence(this IServiceCollection services,
        IConfiguration configuration)
    {
        //Add repo
        services.AddScoped<IMessagesRepository, MessagesRepository>();
        services.AddScoped<IUsersRepository, UsersRepository>();
        
        //Add mongoDb settings
        var settings = new DbSettings();
        configuration.GetSection("PostPigeonDatabase").Bind(settings);
        services.AddSingleton(settings);
        
        //Guid as string in mongodb
        BsonSerializer.RegisterSerializer(new GuidSerializer(GuidRepresentation.Standard));
        
        //Enum to string in mongodb
        var pack = new ConventionPack
        {
            new EnumRepresentationConvention(BsonType.String)
        };
        ConventionRegistry.Register("EnumStringConvention", pack, t => true);

        return services;
    }
}