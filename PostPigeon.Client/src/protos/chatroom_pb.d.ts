import * as jspb from 'google-protobuf'

import * as common_pb from './common_pb';


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
    textMessage: string,
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

