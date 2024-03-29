﻿using Grpc.Core;
using MapsterMapper;
using Microsoft.AspNetCore.Authorization;
using PostPigeon.Core;
using PostPigeon.Infra.Persistence.Repositories.Interfaces;
using PostPigeon.Core.Models;

namespace PostPigeon.Server.Services;

[Authorize]
public class ChatroomService : Chatroom.ChatroomBase
{
    private readonly IMapper _mapper;
    private readonly IMessagesRepository _messagesRepository;
    private readonly IHostApplicationLifetime _applicationLifetime;
    private readonly Room _room;

    public ChatroomService(IMessagesRepository messagesRepository, 
        Room room, IMapper mapper, IHostApplicationLifetime applicationLifetime)
    {
        _messagesRepository = messagesRepository;
        _room = room;
        _mapper = mapper;
        _applicationLifetime = applicationLifetime;
    }

    public override async Task<None> SendMessage(MessageRequest request, ServerCallContext context)
    {
        var message = Message.Create(request.UserId, request.TextMessage);
        await _messagesRepository.CreateAsync(message);
        await _room.WriteMessageAsync(message);
        return new None();
    }

    public override async Task ReceiveMessages(None request, IServerStreamWriter<MessageResponse> responseStream, 
        ServerCallContext context)
    {
        var cancellationSource = CancellationTokenSource.CreateLinkedTokenSource(
            context.CancellationToken, _applicationLifetime.ApplicationStopping);
        
        //Receive previous messages
        foreach (var msg in await _messagesRepository.GetAllAsync())
            await responseStream.WriteAsync(_mapper.Map<MessageResponse>(msg), cancellationSource.Token);
        
        while (!cancellationSource.Token.IsCancellationRequested)
        {
            var msg = await _room.ReadMessageAsync(context.CancellationToken);
            await responseStream.WriteAsync(_mapper.Map<MessageResponse>(msg), cancellationSource.Token);
            await cancellationSource.CancelAsync();
        }
    }
}