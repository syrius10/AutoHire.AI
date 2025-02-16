import { useEffect } from "react";
import { registerForPushNotifications } from "./src/services/notificationService";

export default function App() {
    useEffect(() => {
        registerForPushNotifications();
    }, []);

    return <YourNavigationComponent />;
}