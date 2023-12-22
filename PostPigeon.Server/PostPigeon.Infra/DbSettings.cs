namespace PostPigeon.Infra;

public class DbSettings
{
    public string ConnectionString { get; set; } = null!;
    
    public string DatabaseName { get; set; } = null!;

    public string MessagesCollectionName { get; set; } = null!;
    public string UsersCollectionName { get; set; } = null!;
    public string RefreshTokensCollectionName { get; set; } = null!;
}