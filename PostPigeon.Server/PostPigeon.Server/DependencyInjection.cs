using Mapster;
using MapsterMapper;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using PostPigeon.Server.Interceptors;
using PostPigeon.Server.Mappings;

namespace PostPigeon.Server;

public static class DependencyInjection
{
    public static IServiceCollection AddPresentation(this IServiceCollection services)
    {
        services.AddCors();
        services.AddGrpc(options =>
        {
            options.Interceptors.Add<ExceptionInterceptor>();
            options.Interceptors.Add<LoggingInterceptor>();
        });
        services.AddGrpcHealthChecks()
            .AddCheck("Ping", () => HealthCheckResult.Healthy());
    
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