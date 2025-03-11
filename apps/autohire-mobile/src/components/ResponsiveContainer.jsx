import { View } from "react-native";
import PropTypes from 'prop-types';

const ResponsiveContainer = ({ children }) => {
  return <View style={{ padding: 20, flex: 1 }}>{children}</View>;
};
ResponsiveContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResponsiveContainer;
