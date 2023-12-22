namespace PostPigeon.Core.Errors.Auth;

public class InvalidTokenException : DomainException
{
    public override int StatusCode { get; init; } = 16;

    public InvalidTokenException(string errorMessage) : base(errorMessage)
    {
    }
}