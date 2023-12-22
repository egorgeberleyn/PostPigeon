namespace PostPigeon.Core.Errors.Auth;

public class UserNotFoundException : DomainException
{
    public override int StatusCode { get; init; } = 3;

    public UserNotFoundException(string errorMessage) : base(errorMessage)
    {
    }
}