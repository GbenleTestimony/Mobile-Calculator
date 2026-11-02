import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export default function CustomTabIcon({
  color,
  focused,
  iconName,
}: {
  color: any;
  focused: boolean;
  iconName: any;
}) {
  return (
    <View style={styles.container}>
      <Ionicons
        name={focused ? iconName : `${iconName}-outline`}
        color={color ? "white" : "black"}
        size={30}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
