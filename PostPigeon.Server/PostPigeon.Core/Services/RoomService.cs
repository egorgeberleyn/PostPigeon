using System.Threading.Channels;
using PostPigeon.Core.Models;

namespace PostPigeon.Core.Services;

public class RoomService
{
    private readonly Channel<Message> _messageChannel = Channel.CreateUnbounded<Message>(new UnboundedChannelOptions {
        SingleReader = true
    });

    public async Task WriteMessageAsync(Message message)
    {
        await _messageChannel.Writer.WriteAsync(message);
    }
    
    public async Task<Message> ReadMessageAsync(CancellationToken cancellationToken = default)
    {
        var message = await _messageChannel.Reader.ReadAsync(cancellationToken);
        return message;
    }
}