using Grpc.Core;
using Grpc.Core.Interceptors;
using PostPigeon.Core.Errors;

namespace PostPigeon.Server.Interceptors;

public class ExceptionInterceptor : Interceptor
{
    private readonly ILogger<ExceptionInterceptor> _logger;
    
    public ExceptionInterceptor(ILogger<ExceptionInterceptor> logger)
    {
        _logger = logger;
    }

    public override async Task<TResponse> UnaryServerHandler<TRequest, TResponse>(TRequest request, 
        ServerCallContext context,
        UnaryServerMethod<TRequest, TResponse> continuation)
    {
        try
        {
            return await continuation(request, context);
        }
        catch (DomainException exception)
        {
            _logger.LogError("Domain error: \"{ExceptionMessage}\" Request body: {Request} with status code: {ExceptionStatusCode}", 
                exception.Message, request, exception.StatusCode);
            
            var status = new Status((StatusCode)exception.StatusCode, exception.Message);
            throw new RpcException(status);
        }
        catch (Exception exception)
        {
            _logger.LogError("Internal server error: \"{ExceptionMessage}\" Request body: {Request}", 
                exception.Message, request);
            
            throw new RpcException(new Status(StatusCode.Internal, exception.Message));
        }
    }

    public override async Task ServerStreamingServerHandler<TRequest, TResponse>(TRequest request, 
        IServerStreamWriter<TResponse> responseStream,
        ServerCallContext context, ServerStreamingServerMethod<TRequest, TResponse> continuation)
    {
        try
        {
            await continuation(request, responseStream, context);
        }
        catch (DomainException exception)
        {
            _logger.LogError("Domain error: \"{ExceptionMessage}\" Request body: {Request} with status code: {ExceptionStatusCode}", 
                exception.Message, request, exception.StatusCode);
            
            var status = new Status((StatusCode)exception.StatusCode, exception.Message);
            throw new RpcException(status);
        }
        catch (Exception exception)
        {
            _logger.LogError("Internal server error: \"{ExceptionMessage}\" Request body: {Request}", 
                exception.Message, request);
            
            throw new RpcException(new Status(StatusCode.Internal, exception.Message));
        }
    }
}
