import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router';
import { Button } from "react-native-paper";
import { Colors } from "@/constants/Colors";

export default function index() {

  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Text style={styles.header}>Home</Text>
        <Image style={styles.image} source={require("./../../assets/images/home.jpg")}/>
        <Text style={styles.tagline}>At Pattie's Planets, we're commited to getting you the planet of your dreams at prices that are <Text style={styles.bluetxt}>out of this world.</Text></Text>
        <Text style={styles.tagline}>Check out some of our newest additions!</Text>
      <Button style={styles.btn} mode='text' onPress={() => router.push("products")}>
        <Text style={styles.whitetxt}>Our Products</Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
  backgroundColor: "#000",
   height: "100%",
   display: "flex",
   flex: 1,
   alignItems: "center",
   justifyContent: "center"
  },
   container: {
  width: "60%",
   color: "#FFF",
  },
  image: {
    width: "100%",
    marginTop: 20,
  },
  header: {
   color: "#FFF",
   textAlign: "center",
   fontSize: 30
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
  },
  tagline: {
    color: "#FFF",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
 bluetxt: {
   color: Colors.BLUE,
   textAlign: "center",
  }
 });