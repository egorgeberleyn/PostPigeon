using Mapster;
using PostPigeon.Domain.Models;

namespace PostPigeon.Server.Mappings;

public class RegisterMapper : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.NewConfig<User, UserResponse>()
            .RequireDestinationMemberSource(true);

        config.NewConfig<Message, MessageResponse>()
            .RequireDestinationMemberSource(true);
    }
}