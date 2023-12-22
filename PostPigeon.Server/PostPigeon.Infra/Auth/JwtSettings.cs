namespace PostPigeon.Infra.Auth;

public class JwtSettings
{
    public string Secret { get; set; } = null!;
    public int AccessTokenLifetime { get; set; } 
    public int RefreshTokenLifetime { get; set; }
    public string Issuer { get; set; } = null!;
    public string Audience { get; set; } = null!;
}