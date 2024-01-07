using Grpc.Core;
using MapsterMapper;
using PostPigeon.Core.Errors.Auth;
using PostPigeon.Infra.Persistence.Repositories.Interfaces;

namespace PostPigeon.Server.Services;

public class ProfilesService : Profiles.ProfilesBase
{
    private readonly IMapper _mapper;
    private readonly IUsersRepository _usersRepository;

    public ProfilesService(IUsersRepository usersRepository, IMapper mapper)
    {
        _usersRepository = usersRepository;
        _mapper = mapper;
    }

    public override async Task<Profile> GetProfile(GetProfileRequest request, ServerCallContext context)
    {
        if (!Guid.TryParse(request.UserId, out var userId))
            throw new InvalidCastException("Invalid GUID format");
        
        var user = await _usersRepository.GetAsync(userId)
            ?? throw new UserNotFoundException("User not found");

        return _mapper.Map<Profile>(user);
        
    }
}