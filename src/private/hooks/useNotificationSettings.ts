import { useState } from "react";
import { useAuth } from "../../public/hooks/useAuth";
import { notificationSettings } from "../data/notificationSettings";
import { Notification } from "../../shared/types/notification_settings";

type UseNotificationReturnType = {
  isChecked: Notification | undefined;
  handleChange: (propertyName: keyof Notification) => void;
};

const useNotificationSettings = (): UseNotificationReturnType => {
  const { user } = useAuth();
  const userNotifications = notificationSettings.find(
    (record) => record.user_id === user?.id,
  );
  const [isChecked, setIsChecked] = useState<Notification | undefined>(
    userNotifications,
  );

  const handleChange = (propertyName: keyof Notification) => {
    setIsChecked((prevData) => ({
      ...prevData!,
      [propertyName]: !prevData![propertyName],
    }));
  };

  return {
    isChecked,
    handleChange,
  };
};

export { useNotificationSettings };
