import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

export const registerForPushNotifications = async () => {
    if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
            name: "Default",
            importance: Notifications.AndroidImportance.MAX,
        });
    }

    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") return null;

    const token = (await Notifications.getExpoPushTokenAsync()).data;
    return token;
};