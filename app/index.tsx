import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    const interval = setTimeout(() => {
      router.replace("/(dev)/calculator");
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const router = useRouter();
  // function pushScreen() {
  //   router.push("/(dev)/calculator");
  // }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>JCalc</Text>
      {/* <TouchableOpacity style={styles.button} onPress={pushScreen}>
        <Text style={styles.text2}>OK</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    fontFamily: "monospace",
  },
  button: {
    width: 100,
    height: 30,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: 20,
  },
  text2: {
    fontSize: 20,
    fontFamily: "sans-serif",
    color: "white",
  },
});
