using Microsoft.Extensions.DependencyInjection;

namespace PostPigeon.Core;

public static class DependencyInjection
{
    public static IServiceCollection AddCore(this IServiceCollection services)
    {
        services.AddSingleton<Room>();
        return services;
    }
}