namespace PostPigeon.Core.Errors.Auth;

public class TokenAlreadyUsedException : DomainException
{
    public override int StatusCode { get; init; } = 16;

    public TokenAlreadyUsedException(string errorMessage) : base(errorMessage)
    {
    }
}