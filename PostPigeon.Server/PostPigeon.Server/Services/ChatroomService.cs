using Grpc.Core;
using Mapster;
using MapsterMapper;
using PostPigeon.Infra.Persistence.Repositories.Interfaces;
using PostPigeon.Core.Models;
using PostPigeon.Core.Services;

namespace PostPigeon.Server.Services;

public class ChatroomService : Chatroom.ChatroomBase
{
    private readonly IMapper _mapper;
    private readonly IUsersRepository _usersRepository;
    private readonly IMessagesRepository _messagesRepository;
    private readonly RoomService _roomService;

    public ChatroomService(IUsersRepository usersRepository, IMessagesRepository messagesRepository, 
        RoomService roomService, IMapper mapper)
    {
        _usersRepository = usersRepository;
        _messagesRepository = messagesRepository;
        _roomService = roomService;
        _mapper = mapper;
    }

    public override async Task<None> SendMessage(MessageRequest request, ServerCallContext context)
    {
        var message = Message.Create(request.UserId, request.TextMessage);
        await _messagesRepository.CreateAsync(message);
        await _roomService.WriteMessageAsync(message);
        return new None();
    }

    public override async Task ReceiveMessages(None request, IServerStreamWriter<MessageResponse> responseStream, 
        ServerCallContext context)
    {
        //Receive previous messages
        foreach (var msg in await _messagesRepository.GetAllAsync())
            await responseStream.WriteAsync(_mapper.Map<MessageResponse>(msg));
        
        while (!context.CancellationToken.IsCancellationRequested)
        {
            var msg = await _roomService.ReadMessageAsync(context.CancellationToken);
            await responseStream.WriteAsync(_mapper.Map<MessageResponse>(msg));
            
        }
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