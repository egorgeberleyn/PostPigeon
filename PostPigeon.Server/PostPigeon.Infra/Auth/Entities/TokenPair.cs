namespace PostPigeon.Infra.Auth.Entities;

public record TokenPair(string AccessToken, string RefreshToken);