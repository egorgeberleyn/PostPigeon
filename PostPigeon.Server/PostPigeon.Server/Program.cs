using PostPigeon.DAL;
using PostPigeon.Server;
using PostPigeon.Server.Services;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services
        .AddPresentation()
        .AddInfrastructure(builder.Configuration);
}

var app = builder.Build();
{
    app.UseCors(options =>
        options.WithOrigins("http://localhost:3000")
            .AllowAnyMethod()
            .AllowAnyHeader());
    
    app.MapGrpcService<ChatroomService>();
    app.Run();
}
