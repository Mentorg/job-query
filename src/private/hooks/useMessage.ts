import { useAuth } from "../../public/hooks/useAuth";
import { message } from "../data/message";
import { user as userList } from "../data/user";

export function useMessage(id?: number) {
  const { user } = useAuth();
  const messageId = Number(id);

  const userDetails: number[] = [];

  const messageList = message.filter(
    (record) => record.receiver_id === user?.id,
  );

  messageList.forEach((element) => {
    userDetails.push(element.sender_id);
  });

  const senderDetails = userList.filter((record) =>
    userDetails.some((num) => num === record.id),
  );

  const messageDetails = messageList.find((record) => record.id === messageId);

  return {
    user,
    messageList,
    senderDetails,
    messageDetails,
  };
}
