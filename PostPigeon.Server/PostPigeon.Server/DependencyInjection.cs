using Mapster;
using MapsterMapper;
using PostPigeon.Server.Mappings;

namespace PostPigeon.Server;

public static class DependencyInjection
{
    public static IServiceCollection AddPresentation(this IServiceCollection services)
    {
        services.AddCors();
        
        services.AddGrpc();
    
        //Add mapper
        services.AddSingleton(
            AddConfiguredMappingConfig());
        services.AddScoped<IMapper, ServiceMapper>();
        
        return services;
    }
    
    private static TypeAdapterConfig AddConfiguredMappingConfig()
    {
        var config = new TypeAdapterConfig();
        new RegisterMapper().Register(config);
        return config;
    }
}