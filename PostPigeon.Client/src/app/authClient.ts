import { AuthClient } from "../protos/AuthServiceClientPb";
import {
  LoginRequest,
  RefreshTokenRequest,
  RegisterRequest,
} from "../protos/auth_pb";

const EnvoyURL = "http://localhost:8080";

export const login = async (name: string, password: string) => {
  const client = new AuthClient(EnvoyURL);
  const request = new LoginRequest();
  request.setUsername(name);
  request.setPassword(password);
  const response = await client.login(request, {});
  return response.toObject();
};

export const register = async (
  name: string,
  password: string,
  avatarUrl: string
) => {
  const client = new AuthClient(EnvoyURL);
  const request = new RegisterRequest();
  request.setUsername(name);
  request.setPassword(password);
  request.setAvatarUrl(avatarUrl);
  const response = await client.register(request, {});
  return response.toObject();
};

export const refreshToken = async (refreshToken: string) => {
  const client = new AuthClient(EnvoyURL);
  const request = new RefreshTokenRequest();
  request.setRefreshToken(refreshToken);
  const response = await client.refreshToken(request, {});
  return response.toObject();
};
