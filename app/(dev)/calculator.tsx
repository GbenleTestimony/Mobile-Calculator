import { StyleSheet, Text, View } from "react-native";

export default function Calculator() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>There should be a Calculator here</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A05729",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 15,
  },
});
