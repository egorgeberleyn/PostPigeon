namespace PostPigeon.Core.Errors.Auth;

public class InvalidCredentialsException : DomainException
{
    public override int StatusCode { get; init; } = 16;

    public InvalidCredentialsException(string errorMessage) : base(errorMessage)
    {
    }
}