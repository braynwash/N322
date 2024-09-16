import { StyleSheet,
  Button,
  View,
  Text, Image } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';

export default function home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>I DID IT. I SAVED THE TOWN</Text>
      <Link href="/about" style={styles.button}>Go To About</Link>
      <Button title="Go To..." onPress={() => router.push("/about")}></Button>
      <View>
        <Image source={require("../../assets/images/fb825397234aff3293435f8658b29308.jpg")}></Image>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
      fontFamily: 'gillSans',
      fontSize: 20,
  },
  container: {
    flex: 1,
    padding: 25,
    fontSize: 20,
    backgroundColor: "#990000"
  },
  button: {
    width: "50%",
    padding: (5, 10),
    color: "#FFF",
    textAlign: "center",
    backgroundColor: "#0177ff",

  }
})