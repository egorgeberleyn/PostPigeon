using Grpc.Core;
using MapsterMapper;
using Microsoft.AspNetCore.Authorization;
using PostPigeon.Core.Errors.Auth;
using PostPigeon.Infra.Auth;
using PostPigeon.Infra.Persistence.Repositories.Interfaces;
using BC = BCrypt.Net.BCrypt;

namespace PostPigeon.Server.Services;

[Authorize]
public class ProfilesService : Profiles.ProfilesBase
{
    private readonly IMapper _mapper;
    private readonly IUserContext _userContext;
    private readonly IUsersRepository _usersRepository;

    public ProfilesService(IUsersRepository usersRepository, IMapper mapper, IUserContext userContext)
    {
        _usersRepository = usersRepository;
        _mapper = mapper;
        _userContext = userContext;
    }

    public override async Task<Profile> GetProfile(GetProfileRequest request, ServerCallContext context)
    {
        if (!Guid.TryParse(request.UserId, out var userId))
            throw new InvalidCastException("Invalid GUID format");

        var user = await _usersRepository.GetAsync(userId)
                   ?? throw new UserNotFoundException("User not found");
        return _mapper.Map<Profile>(user);
    }

    public override async Task<None> UpdateProfile(UpdateProfileRequest request, ServerCallContext context)
    {
        var user = await _userContext.GetCurrentUserAsync(context)
                    ?? throw new UserNotFoundException("User is not logged in");

        var passwordHash = request.Password == null 
            ? default 
            : BC.HashPassword(request.Password);
        var updatedUser = user.Update(request.Username, request.Email, passwordHash);
        await _usersRepository.UpdateAsync(user.Id, updatedUser);

        return new None();
    }

    public override async Task<None> ChangeAvatar(ChangeAvatarRequest request, ServerCallContext context)
    {
        var user = await _userContext.GetCurrentUserAsync(context)
                   ?? throw new UserNotFoundException("User is not logged in");
        
        user.SetAvatar(request.ImageBytes.ToByteArray());
        await _usersRepository.UpdateAsync(user.Id, user);

        return new None();
    }
}