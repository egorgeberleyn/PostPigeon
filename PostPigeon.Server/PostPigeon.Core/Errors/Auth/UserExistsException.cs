namespace PostPigeon.Core.Errors.Auth;

public class UserExistsException : DomainException
{
    public override int StatusCode { get; init; } = 3;

    public UserExistsException(string errorMessage) : base(errorMessage)
    {
    }
}