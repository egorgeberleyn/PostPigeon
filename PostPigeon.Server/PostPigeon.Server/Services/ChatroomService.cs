using Grpc.Core;
using Mapster;
using PostPigeon.DAL.DbRepositories.Interfaces;
using PostPigeon.Domain.Models;

namespace PostPigeon.Server.Services;

public class ChatroomService : Chatroom.ChatroomBase
{
    private readonly IUsersRepository _usersRepository;
    private readonly IMessagesRepository _messagesRepository;
    private readonly List<IServerStreamWriter<MessageResponse>> _observers = new();

    public ChatroomService(IUsersRepository usersRepository, IMessagesRepository messagesRepository)
    {
        _usersRepository = usersRepository;
        _messagesRepository = messagesRepository;
    }

    public override async Task<JoinResponse> Join(JoinRequest request, ServerCallContext context)
    {
        if(request.Name is "" or null)
            return new JoinResponse { Error = "Name is required.", Result = JoinResult.Failed};
        
        var user = await _usersRepository.GetAsync(request.Name);
        if (user != null) 
            return new JoinResponse { Error = "User already exist.", Result = JoinResult.Failed};
        
        await _usersRepository.CreateAsync(new User
        {
            Id = Guid.NewGuid().ToString(),
            Name = request.Name,
            AvatarUrl = request.AvatarUrl,
        });
        
        return new JoinResponse { Result = JoinResult.Success};
    }

    public override async Task<None> SendMessage(MessageRequest request, ServerCallContext context)
    {
        var message = new Message()
        {
            Id = Guid.NewGuid().ToString(),
            UserId = request.UserId,
            Text = request.TextMessage,
            Time = DateTime.Now,
        };
        await _messagesRepository.CreateAsync(message);

        return new None();
    }

    public override async Task ReceiveMessages(None request, IServerStreamWriter<MessageResponse> responseStream, 
        ServerCallContext context)
    {
        foreach (var message in await _messagesRepository.GetAllAsync())
            await responseStream.WriteAsync(message.Adapt<MessageResponse>());
        
        _observers.Add(responseStream);
        while (!context.CancellationToken.IsCancellationRequested)
            await Task.Delay(100);
        _observers.Remove(responseStream);
    }

    public override async Task GetUsers(None request, IServerStreamWriter<UserList> responseStream, 
        ServerCallContext context)
    {
        var users = await _usersRepository.GetAllAsync();
        var reply = new UserList();

        users.ForEach(user =>
            reply.Users.Add(user.Adapt<UserResponse>()));
        
        /*return reply;*/
    }
}