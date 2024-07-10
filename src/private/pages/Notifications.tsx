import { useNotification } from "../hooks/useNotification";

function Notifications() {
  const { notificationList } = useNotification();

  return (
    <div className="flex w-full flex-col gap-y-10 px-6 py-4 md:px-10 lg:px-12 xl:px-14">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold md:mt-4 2xl:text-3xl">
          Notifications
        </h1>
      </div>
      <div className="flex flex-col">
        {notificationList.length > 0 ? (
          notificationList.map((notification) => (
            <div
              key={notification.id}
              className={`${!notification.is_read ? "bg-slate-100" : ""} flex border-b border-slate-300 px-6 py-4 transition-all`}
            >
              <img
                src="https://placehold.co/100/fff/9e9e9e?text=i"
                alt="Notification icon"
                className="h-10 w-10 rounded-full border-2 border-slate-300"
              />
              <div className="ml-2">
                <h3 className="text-sm font-medium text-slate-500">
                  {notification.type}
                </h3>
                <div className="flex items-baseline">
                  <h2 className="text-base font-medium md:text-lg">
                    {notification.subject}
                  </h2>
                  <p className="ml-auto whitespace-nowrap text-xs font-medium text-slate-500 md:ml-4">
                    {notification.created_at}
                  </p>
                </div>
                <p className="mt-2 line-clamp-1 text-sm text-slate-500">
                  {notification.content}
                </p>
              </div>
            </div>
          ))
        ) : (
          <>
            <h2>No notifications yet</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default Notifications;
