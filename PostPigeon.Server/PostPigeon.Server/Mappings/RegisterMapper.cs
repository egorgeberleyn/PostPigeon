using Google.Protobuf;
using Mapster;
using PostPigeon.Core.Models;

namespace PostPigeon.Server.Mappings;

public class RegisterMapper : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.NewConfig<User, Profile>()
            .Map(dist => dist.UserId, src => src.Id.ToString())
            .Map(dist => dist.Avatar, src => src.Avatar == null ? default : UnsafeByteOperations.UnsafeWrap(src.Avatar));
        
        config.NewConfig<Message, MessageResponse>()
            .Map(dist => dist.TextMessage, src => src.Text)
            .Map(dist => dist.SenderId, src => src.UserId);
    }
}