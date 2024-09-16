import { StyleSheet,
    View,
    Text, Image } from 'react-native';
  import React from 'react';
  import { Link, router } from 'expo-router';
  
  export default function products() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Products</Text>
        <Text style={styles.text}>Check out our latest collection!</Text>
        <View style={{flexDirection:'row', justifyContent:"space-around", marginBottom: 25,}}>
            <View style={styles.card}>
                <Text style={{fontFamily:"gillBold", fontSize:20,}}>Pumpkin Witch</Text>
                <View style={styles.image}>
                  <Image style={styles.model} source={require("../../assets/images/71iclvQpOlS._AC_UF894,1000_QL80_.jpg")}></Image>
                </View>
                <Text>Price</Text>
                <View style={styles.cardButton}>
                  <Text>Add to Cart</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Text style={{fontFamily:"gillBold", fontSize:20,}}>Princess</Text>
                <View style={styles.image}>
                  <Image style={styles.model} source={require("../../assets/images/71C4vdZGNtL.jpg")}></Image>
                </View>
                <Text>$30</Text>
                <View style={styles.cardButton}>
                  <Text>Add to Cart</Text>
                </View>
            </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:"space-around", marginBottom: 25,}}>
            <View style={styles.card}>
                <Text style={{fontFamily:"gillBold", fontSize:20,}}>King</Text>
                <View style={styles.image}>
                  <Image style={styles.model} source={require("../../assets/images/61dAr99Bd3L.jpg")}></Image>
                </View>
                <Text>Price</Text>
                <View style={styles.cardButton}>
                  <Text>Add to Cart</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Text style={{fontFamily:"gillBold", fontSize:20,}}>Pumpkin</Text>
                <View style={styles.image}>
                  <Image style={styles.model} source={require("../../assets/images/61VBa5lHkVL.jpg")}></Image>
                </View>
                <Text>Price</Text>
                <View style={styles.cardButton}>
                  <Text>Add to Cart</Text>
                </View>
            </View>
        </View>
        
        <Link href="/home" style={styles.button}>Back to Home</Link>
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
        marginBottom: 15,
    },
    container: {
      flex: 1,
      padding: 25,
      fontSize: 20,
      backgroundColor: "#FCD12A"
    }, 
    card: {
      backgroundColor: "#FFF",
      width: "47%",
      height: 275,
      alignItems: "center",
      justifyContent: "center",
    }, 
    image: {
      backgroundColor: "#000",
      width: "80%",
      height: 150,
      marginTop: 5,
      marginBottom: 5,
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
      marginBottom: 15,
    }, 
    cardButton: {
      width: "60%",
      padding: (5, 10),
      color: "#000",
      textAlign: "center",
      fontFamily: 'gillBold',
      backgroundColor: "#FCD12A",
      marginTop: 5,
      marginBottom: 10,
    }, 
  })