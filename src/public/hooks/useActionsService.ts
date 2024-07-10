import { useEffect, useRef, useState } from "react";
import { useMessage } from "../../private/hooks/useMessage";
import { useNotification } from "../../private/hooks/useNotification";

export function useActionsService() {
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const { messageList } = useMessage();
  const { notificationList } = useNotification();

  function handleOpenAction(action: string | null) {
    setActiveAction((prevAction) => (prevAction === action ? null : action));
  }

  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setActiveAction(null);
      }
    };

    document.addEventListener("mousedown", handler, true);

    return () => {
      document.removeEventListener("mousedown", handler, true);
    };
  });

  function isActiveAction(action: string) {
    return activeAction === action;
  }

  return {
    ref,
    handleOpenAction,
    isActiveAction,
    messageList,
    notificationList,
  };
}
