import AlertAction from "./AlertAction";
import UserAction from "./UserAction";
import { useActionsService } from "../hooks/useActionsService";

function NavActions() {
  const {
    ref,
    handleOpenAction,
    isActiveAction,
    messageList,
    notificationList,
  } = useActionsService();

  return (
    <ul className="flex items-center space-x-6" ref={ref}>
      <AlertAction
        menu="notifications"
        menuData={notificationList}
        activeMenu={isActiveAction("notifications")}
        onHandleOpenMenu={() => handleOpenAction("notifications")}
      />
      <AlertAction
        menu="messages"
        menuData={messageList}
        activeMenu={isActiveAction("messages")}
        onHandleOpenMenu={() => handleOpenAction("messages")}
      />
      <UserAction
        menu="userMenu"
        activeMenu={isActiveAction("userMenu")}
        onHandleOpenMenu={() => handleOpenAction("userMenu")}
      />
    </ul>
  );
}

export default NavActions;
