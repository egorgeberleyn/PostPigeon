import { ProfilesClient } from "../protos/ProfileServiceClientPb";
import {
  GetProfileRequest,
  UpdateProfileRequest,
  ChangeAvatarRequest,
} from "../protos/profile_pb";
import { setAuthInterceptor } from "./interceptors/authInterceptor";

const EnvoyURL = process.env.REACT_APP_ENVOY_URL ?? "http://localhost:8080";
const {options} = setAuthInterceptor();

export const getProfile = async (userId: string) => {
  const client = new ProfilesClient(EnvoyURL, null, options);
  const request = new GetProfileRequest();
  request.setUserId(userId);
  const response = await client.getProfile(request, {});
  return response.toObject();
};

export const updateProfile = async (username: string, email: string, password?: string) => {
  const client = new ProfilesClient(EnvoyURL, null, options);
  const request = new UpdateProfileRequest();
  request.setUsername(username);
  if(password) request.setPassword(password);
  request.setEmail(email);
  const response = await client.updateProfile(request, {});
  return response.toObject();
};

export const changeAvatar = async (imgBytes: Uint8Array) => {
  const client = new ProfilesClient(EnvoyURL, null, options);
  const request = new ChangeAvatarRequest();
  request.setImageBytes(imgBytes);
  const response = await client.changeAvatar(request, {});
  return response.toObject();
};
