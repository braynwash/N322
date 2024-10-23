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
          <View style={styles.productHolder}>
            <Image style={styles.image} source={require("./../../assets/images/Populated_Planet.png")}/>
          <Text style={styles.productTitle}>Earth</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in voluptates doloribus, optio dolorum quibusdam omnis voluptatum dolores adipisci vel.</Text>
          <Button style={styles.btn} mode='text'>
            <Text style={styles.whitetxt}>Add to Cart</Text>
          </Button>
          </View>
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
  header: {
   color: "#FFF",
   textAlign: "center",
   fontSize: 30,
   marginBottom: 20,
  },
  product: {
    backgroundColor: "#FFF",
    width: 300,
    height: 400,
  },
  productHolder: {
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  productTitle: {
    color: Colors.BLUE,
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: "70%",
    height: 200,
  },
  btn: {
    marginTop: 15,
    backgroundColor: Colors.BLUE,
    padding: 5,
    borderRadius: 50,
    width: "80%"
  },
  whitetxt: {
    color: Colors.WHITE,
    textAlign: "center",
    fontSize: 16,
  }
 });