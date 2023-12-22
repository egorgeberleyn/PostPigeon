namespace PostPigeon.Core.Errors;

public class DomainException : Exception
{
    public virtual int StatusCode { get; init; }

    public DomainException(string errorMessage) : base(errorMessage)
    {
    }
}