import * as jspb from 'google-protobuf'



export class None extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): None.AsObject;
  static toObject(includeInstance: boolean, msg: None): None.AsObject;
  static serializeBinaryToWriter(message: None, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): None;
  static deserializeBinaryFromReader(message: None, reader: jspb.BinaryReader): None;
}

export namespace None {
  export type AsObject = {
  }
}

export class JoinRequest extends jspb.Message {
  getName(): string;
  setName(value: string): JoinRequest;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): JoinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinRequest): JoinRequest.AsObject;
  static serializeBinaryToWriter(message: JoinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinRequest;
  static deserializeBinaryFromReader(message: JoinRequest, reader: jspb.BinaryReader): JoinRequest;
}

export namespace JoinRequest {
  export type AsObject = {
    name: string,
    avatarUrl: string,
  }
}

export class JoinResponse extends jspb.Message {
  getError(): string;
  setError(value: string): JoinResponse;

  getResult(): JoinResult;
  setResult(value: JoinResult): JoinResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinResponse): JoinResponse.AsObject;
  static serializeBinaryToWriter(message: JoinResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinResponse;
  static deserializeBinaryFromReader(message: JoinResponse, reader: jspb.BinaryReader): JoinResponse;
}

export namespace JoinResponse {
  export type AsObject = {
    error: string,
    result: JoinResult,
  }
}

export class MessageRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): MessageRequest;

  getTextMessage(): string;
  setTextMessage(value: string): MessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MessageRequest): MessageRequest.AsObject;
  static serializeBinaryToWriter(message: MessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageRequest;
  static deserializeBinaryFromReader(message: MessageRequest, reader: jspb.BinaryReader): MessageRequest;
}

export namespace MessageRequest {
  export type AsObject = {
    userId: string,
    textMessage: string,
  }
}

export class MessageResponse extends jspb.Message {
  getSenderId(): string;
  setSenderId(value: string): MessageResponse;

  getSenderAvatar(): string;
  setSenderAvatar(value: string): MessageResponse;

  getTextMessage(): string;
  setTextMessage(value: string): MessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MessageResponse): MessageResponse.AsObject;
  static serializeBinaryToWriter(message: MessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageResponse;
  static deserializeBinaryFromReader(message: MessageResponse, reader: jspb.BinaryReader): MessageResponse;
}

export namespace MessageResponse {
  export type AsObject = {
    senderId: string,
    senderAvatar: string,
    textMessage: string,
  }
}

export class UserResponse extends jspb.Message {
  getId(): string;
  setId(value: string): UserResponse;

  getName(): string;
  setName(value: string): UserResponse;

  getStatus(): Status;
  setStatus(value: Status): UserResponse;

  getAvatar(): string;
  setAvatar(value: string): UserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
  static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserResponse;
  static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
  export type AsObject = {
    id: string,
    name: string,
    status: Status,
    avatar: string,
  }
}

export class UserList extends jspb.Message {
  getUsersList(): Array<UserResponse>;
  setUsersList(value: Array<UserResponse>): UserList;
  clearUsersList(): UserList;
  addUsers(value?: UserResponse, index?: number): UserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserList.AsObject;
  static toObject(includeInstance: boolean, msg: UserList): UserList.AsObject;
  static serializeBinaryToWriter(message: UserList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserList;
  static deserializeBinaryFromReader(message: UserList, reader: jspb.BinaryReader): UserList;
}

export namespace UserList {
  export type AsObject = {
    usersList: Array<UserResponse.AsObject>,
  }
}

export class ReceiveRequest extends jspb.Message {
  getUser(): string;
  setUser(value: string): ReceiveRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiveRequest): ReceiveRequest.AsObject;
  static serializeBinaryToWriter(message: ReceiveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiveRequest;
  static deserializeBinaryFromReader(message: ReceiveRequest, reader: jspb.BinaryReader): ReceiveRequest;
}

export namespace ReceiveRequest {
  export type AsObject = {
    user: string,
  }
}

export enum JoinResult { 
  SUCCESS = 0,
  FAILED = 1,
}
export enum Status { 
  UNKNOWN = 0,
  ONLINE = 1,
  OFFLINE = 2,
}
