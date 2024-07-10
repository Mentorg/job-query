import { useAuth } from "../../public/hooks/useAuth";
import { notification } from "../data/notification";

export function useNotification() {
  const { user } = useAuth();
  const notificationList = notification.filter(
    (record) => record.user_id === user?.id,
  );

  return {
    user,
    notificationList,
  };
}
