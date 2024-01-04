using Grpc.Core;
using Mapster;
using PostPigeon.Infra.Persistence.Repositories.Interfaces;
using PostPigeon.Core.Models;

namespace PostPigeon.Server.Services;

public class ChatroomService : Chatroom.ChatroomBase
{
    private readonly IUsersRepository _usersRepository;
    private readonly IMessagesRepository _messagesRepository;
    private readonly List<IServerStreamWriter<MessageResponse>> _observers = [];

    public ChatroomService(IUsersRepository usersRepository, IMessagesRepository messagesRepository)
    {
        _usersRepository = usersRepository;
        _messagesRepository = messagesRepository;
    }

    public override async Task<None> SendMessage(MessageRequest request, ServerCallContext context)
    {
        var message = Message.Create(request.UserId, request.TextMessage);
        await _messagesRepository.CreateAsync(message);

        return new None();
    }

    public override async Task ReceiveMessages(None request, IServerStreamWriter<MessageResponse> responseStream, 
        ServerCallContext context)
    {
        foreach (var message in await _messagesRepository.GetAllAsync())
            await responseStream.WriteAsync(new MessageResponse {TextMessage = message.Text, SenderId = message.UserId});
        
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