import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5001");

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on("newNotification", (message) => {
      const newMessage = { id: Date.now(), text: message };
      setNotifications((prev) => [...prev, newMessage]);
    });

    return () => socket.off("newNotification");
  }, []);

  return (
    <div className="relative">
      <button className="text-xl">🔔 {notifications.length}</button>
      {notifications.length > 0 && (
        <div className="absolute bg-white border p-2 mt-2 rounded">
          {notifications.map((msg) => (
            <p key={msg.id}>{msg.text}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
