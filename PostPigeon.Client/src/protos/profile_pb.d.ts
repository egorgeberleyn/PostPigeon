import * as jspb from 'google-protobuf'

import * as common_pb from './common_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class GetProfileRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProfileRequest): GetProfileRequest.AsObject;
  static serializeBinaryToWriter(message: GetProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProfileRequest;
  static deserializeBinaryFromReader(message: GetProfileRequest, reader: jspb.BinaryReader): GetProfileRequest;
}

export namespace GetProfileRequest {
  export type AsObject = {
    userId: string,
  }
}

export class UpdateProfileRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): UpdateProfileRequest;

  getPassword(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPassword(value?: google_protobuf_wrappers_pb.StringValue): UpdateProfileRequest;
  hasPassword(): boolean;
  clearPassword(): UpdateProfileRequest;

  getEmail(): string;
  setEmail(value: string): UpdateProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProfileRequest): UpdateProfileRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileRequest;
  static deserializeBinaryFromReader(message: UpdateProfileRequest, reader: jspb.BinaryReader): UpdateProfileRequest;
}

export namespace UpdateProfileRequest {
  export type AsObject = {
    username: string,
    password?: google_protobuf_wrappers_pb.StringValue.AsObject,
    email: string,
  }
}

export class ChangeAvatarRequest extends jspb.Message {
  getImageBytes(): Uint8Array | string;
  getImageBytes_asU8(): Uint8Array;
  getImageBytes_asB64(): string;
  setImageBytes(value: Uint8Array | string): ChangeAvatarRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeAvatarRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeAvatarRequest): ChangeAvatarRequest.AsObject;
  static serializeBinaryToWriter(message: ChangeAvatarRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeAvatarRequest;
  static deserializeBinaryFromReader(message: ChangeAvatarRequest, reader: jspb.BinaryReader): ChangeAvatarRequest;
}

export namespace ChangeAvatarRequest {
  export type AsObject = {
    imageBytes: Uint8Array | string,
  }
}

export class Profile extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): Profile;

  getUsername(): string;
  setUsername(value: string): Profile;

  getAvatar(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setAvatar(value?: google_protobuf_wrappers_pb.BytesValue): Profile;
  hasAvatar(): boolean;
  clearAvatar(): Profile;

  getEmail(): string;
  setEmail(value: string): Profile;

  getStatus(): UserStatus;
  setStatus(value: UserStatus): Profile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Profile.AsObject;
  static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
  static serializeBinaryToWriter(message: Profile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Profile;
  static deserializeBinaryFromReader(message: Profile, reader: jspb.BinaryReader): Profile;
}

export namespace Profile {
  export type AsObject = {
    userId: string,
    username: string,
    avatar?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    email: string,
    status: UserStatus,
  }
}

export class ProfilesList extends jspb.Message {
  getProfilesList(): Array<Profile>;
  setProfilesList(value: Array<Profile>): ProfilesList;
  clearProfilesList(): ProfilesList;
  addProfiles(value?: Profile, index?: number): Profile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfilesList.AsObject;
  static toObject(includeInstance: boolean, msg: ProfilesList): ProfilesList.AsObject;
  static serializeBinaryToWriter(message: ProfilesList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfilesList;
  static deserializeBinaryFromReader(message: ProfilesList, reader: jspb.BinaryReader): ProfilesList;
}

export namespace ProfilesList {
  export type AsObject = {
    profilesList: Array<Profile.AsObject>,
  }
}

export enum UserStatus { 
  UNKNOWN = 0,
  ONLINE = 1,
  OFFLINE = 2,
}
