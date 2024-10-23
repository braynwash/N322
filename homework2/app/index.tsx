import { Text, View, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Index() {
const router = useRouter();

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={require("./../assets/images/Populated_Planet.png")}/>
        <Text style={styles.header}>Pattie's Planets</Text>
        <Text style={styles.tagline}>Purchase your own planet <Text style={styles.bluetxt}>TODAY!</Text></Text>
        <Button style={styles.btn} mode="text" onPress={() => router.push("/(auth)/sign-in")}>
          <Text style={styles.whitetxt}>Sign in</Text>
        </Button>
        <Button style={styles.btn} mode="text" onPress={() => router.push("/(auth)/sign-up")}>
          <Text style={styles.whitetxt}>Sign Up Today!</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#111",
  },
  image: {
    width: 300,
    height: 275,
  },
  header: {
  color: Colors.WHITE,
  textAlign: "center",
  fontSize: 30,
  marginBottom: 15,
  marginTop: 20
  },
  tagline: {
    color: Colors.WHITE,
    textAlign: "center",
    fontSize: 20,
    marginBottom: 15,
    },
    bluetxt: {
      color: Colors.BLUE
    },
    btn: {
      backgroundColor: Colors.BLUE,
      padding: 5,
      borderRadius: 50,
      marginTop: 25
    },
    whitetxt: {
      color: Colors.WHITE,
      textAlign: "center",
      fontSize: 18,
    }
});
