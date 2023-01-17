using Mapster;
using MapsterMapper;
using PostPigeon.DAL;
using PostPigeon.DAL.DbRepositories;
using PostPigeon.DAL.DbRepositories.Interfaces;
using PostPigeon.Server.Mappings;
using PostPigeon.Server.Services;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddGrpc();

    //Add mongoDb
    builder.Services.Configure<ArsysChatDatabaseSettings>(builder.Configuration.GetSection("PostPigeonDatabase"));

    //Add mapper
    builder.Services.AddSingleton(GetConfiguredMappingConfig());
    builder.Services.AddScoped<IMapper, ServiceMapper>();

    //Add services
    builder.Services.AddSingleton<IMessagesRepository, MessagesRepository>();
    builder.Services.AddSingleton<IUsersRepository, UsersRepository>();
    
    builder.Services.AddCors();
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

TypeAdapterConfig GetConfiguredMappingConfig()
{
    var config = new TypeAdapterConfig();
    new RegisterMapper().Register(config);
    return config;
}
