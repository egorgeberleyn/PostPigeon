import { ProfilesClient } from "../protos/ProfileServiceClientPb";
import {
  GetProfileRequest,
  UpdateProfileRequest,
  ChangeAvatarRequest,
} from "../protos/profile_pb";

const EnvoyURL = process.env.REACT_APP_ENVOY_URL ?? "http://localhost:8080";

export const getProfile = async (userId: string) => {
  const client = new ProfilesClient(EnvoyURL);
  const request = new GetProfileRequest();
  request.setUserId(userId);
  const response = await client.getProfile(request, {});
  return response.toObject();
};

export const updateProfile = async (username: string) => {
  const client = new ProfilesClient(EnvoyURL);
  const request = new UpdateProfileRequest();
  request.setUsername(username);
  const response = await client.updateProfile(request, {});
  return response.toObject();
};

export const changeAvatar = async (imgBytes: Uint8Array) => {
  const client = new ProfilesClient(EnvoyURL);
  const request = new ChangeAvatarRequest();
  request.setImageBytes(imgBytes);
  const response = await client.changeAvatar(request, {});
  return response.toObject();
};
