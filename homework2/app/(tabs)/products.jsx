import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button } from "react-native-paper";
import { Colors } from "@/constants/Colors";
export default function products() {
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Text style={styles.header}>Our Products</Text>
        <View style={styles.product}>

        </View>
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
    display: "flex",
    alignItems: "center"
  },
  header: {
   color: "#FFF",
   textAlign: "center",
   fontSize: 30,
   marginBottom: 20,
  },
  product: {
    backgroundColor: "#FFF",
    width: "60%",
    height: 250,
    display: "flex",
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
 bluetxt: {
   color: Colors.BLUE,
   textAlign: "center",
  },
 });