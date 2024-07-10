import { NavLink } from "react-router-dom";
import { useMessage } from "../hooks/useMessage";

function Messages() {
  const { messageList, senderDetails } = useMessage();

  return (
    <div className="flex w-full flex-col gap-y-10 px-6 py-4 md:px-10 lg:px-12 xl:px-14">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold md:mt-4 2xl:text-3xl">
          Messages
        </h1>
        <NavLink
          to="newMessage"
          className="rounded-md bg-primary px-8 py-2 text-sm text-white"
        >
          Compose
        </NavLink>
      </div>
      <div>
        {messageList.length > 0 ? (
          messageList.map((message) => {
            const sender = senderDetails.find(
              (record) => record.id === message.sender_id,
            );
            !sender && null;
            return (
              <NavLink
                to={`${message.id}`}
                className={`${!message.is_read ? "bg-slate-100" : ""} flex flex-row items-center border-b-2 border-slate-200 p-2 transition-all hover:bg-slate-200`}
                key={message.id}
              >
                <img
                  src={sender?.avatar}
                  alt={`${sender?.name}'s avatar`}
                  className="w-10"
                />
                <div className="ml-2">
                  <div className="flex items-center">
                    <h2 className="text-normal font-medium">{sender?.name}</h2>
                    <p className="ml-2 text-xs font-medium text-slate-500">
                      {sender?.role}
                    </p>
                  </div>
                  <p className="line-clamp-1 text-xs md:text-sm">
                    {message.content}
                  </p>
                </div>
                <div className="ml-auto flex text-xs font-medium">
                  <p>{message.created_at}</p>
                </div>
              </NavLink>
            );
          })
        ) : (
          <>
            <h2>No messages yet</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default Messages;
