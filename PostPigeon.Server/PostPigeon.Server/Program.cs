using PostPigeon.Core;
using PostPigeon.Infra;
using PostPigeon.Server;
using PostPigeon.Server.Services;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services
        .AddCore()
        .AddPresentation()
        .AddInfrastructure(builder.Configuration);
}

var app = builder.Build();
{
    app.UseCors(options =>
        options.WithOrigins("http://localhost:3000")
            .AllowAnyMethod()
            .AllowAnyHeader());

    app.UseAuthentication();
    app.UseAuthorization();
    
    app.MapGrpcService<ChatroomService>();
    app.MapGrpcService<AuthService>();
    app.MapGrpcService<ProfilesService>();
    app.MapGrpcHealthChecksService();
    
    app.Run();
}
