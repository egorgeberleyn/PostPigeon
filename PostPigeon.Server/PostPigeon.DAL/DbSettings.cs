namespace PostPigeon.DAL;

public class DbSettings
{
    public const string SectionName = "PostPigeonDatabase";
    
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string ChatMessagesCollectionName { get; set; } = null!;
    public string UsersCollectionName { get; set; } = null!;
}