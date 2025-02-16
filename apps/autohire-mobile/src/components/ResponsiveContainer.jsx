import { View } from "react-native";

const ResponsiveContainer = ({ children }) => {
    return <View style={{ padding: 20, flex: 1 }}>{children}</View>
};

export default ResponsiveContainer;