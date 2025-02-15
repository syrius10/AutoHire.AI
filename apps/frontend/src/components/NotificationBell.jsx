import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5001");

const NotificationBell = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        socket.on("newNotification", (message) => {
            setNotifications((prev) => [...prev, message]);
        });

        return () => socket.off("newNotification");
    }, []);

    return (
        <div className="relative">
            <button className="text-xl">🔔 {notifications.length}</button>
            {notifications.length > 0 && (
                <div className="absolute bg-white border p-2 mt-2 rounded">
                    {notifications.map((msg, index) => <p key={index}>{msg}</p>)}
                </div>
            )}
        </div>
    );
};

export default NotificationBell;