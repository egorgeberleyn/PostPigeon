import { ChatroomClient } from "../protos/ChatroomServiceClientPb";
import { MessageRequest } from "../protos/chatroom_pb";
import { None } from "../protos/common_pb";
import { setAuthInterceptor } from "./interceptors/authInterceptor";

const EnvoyURL = process.env.REACT_APP_ENVOY_URL ?? "http://localhost:8080";
const {options} = setAuthInterceptor();

export const sendMessage = async (userId: string, textMessage: string) => {
  const client = new ChatroomClient(EnvoyURL, null, options);
  const request = new MessageRequest();
  request.setUserId(userId);
  request.setTextMessage(textMessage);
  const response = await client.sendMessage(request, {});
  return response.toObject();
};

export const receiveMessages = async () => {
  const client = new ChatroomClient(EnvoyURL, null, options);
  const request = new None();
  const chatStream = client.receiveMessages(request, {});
  return chatStream;
};
