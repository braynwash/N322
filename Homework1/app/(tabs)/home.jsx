import { StyleSheet,
    View,
    Text, Image } from 'react-native';
  import React from 'react';
  import { Link, router } from 'expo-router';
  
  export default function home() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.text}>We have the largest and collest collection of the cat fashion from around the globe. Check out our models!</Text>
        <View style={{flexDirection:'row', justifyContent:"space-evenly", marginBottom: 25,}}>
            <View style={styles.image}>
              <Image style={styles.model} source={require("../../assets/images/cat_home_mobile.jpg")}></Image>
              </View>
            <View style={styles.image}>
            <Image style={styles.model} source={require("../../assets/images/619HhG5MELL._AC_UF1000,1000_QL80_.jpg")}></Image>
            </View>
        </View>
        <Text style={styles.text}>We've been selling cat fashion for decades. Take a look at some of our products!</Text>
        <Link href="/products" style={styles.button}>Our Products</Link>
        <Link href="/contact" style={styles.button}>Contact Us</Link>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    title: {
        fontFamily: 'gillBold',
        fontSize: 35,
        marginBottom: 5,
    },
    text: {
        fontSize: 20, 
        marginBottom: 20,
    },
    container: {
      flex: 1,
      padding: 25,
      fontSize: 20,
      backgroundColor: "#FCD12A"
    },
    image: {
        backgroundColor: "#000",
        width: "45%",
        height: 175,
    },
    model: {
      width: "100%",
      height: "100%"
    },
    button: {
      width: "35%",
      padding: (5, 10),
      color: "#000",
      textAlign: "center",
      fontFamily: 'gillBold',
      backgroundColor: "#FFF",
      marginBottom: 25,
    }
  })