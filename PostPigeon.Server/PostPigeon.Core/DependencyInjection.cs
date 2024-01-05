using Microsoft.Extensions.DependencyInjection;
using PostPigeon.Core.Services;

namespace PostPigeon.Core;

public static class DependencyInjection
{
    public static IServiceCollection AddCore(this IServiceCollection services)
    {
        services.AddSingleton<RoomService>();
        return services;
    }
}