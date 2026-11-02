import { StyleSheet, Text, View } from "react-native";

export default function CustomHeader({
  color,
  title,
}: {
  color?: string;
  title: string;
}) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  text: {
    fontFamily: "sans serif",
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
});
