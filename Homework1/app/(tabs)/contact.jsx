import { StyleSheet,
    View,
    Text, Image, TextInput } from 'react-native';
  import React from 'react';
  import { Link, router } from 'expo-router';
  
  export default function contact() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Contact</Text>
        <View style={styles.image}>
        <Image style={{height:"100%",width:"100%"}} source={require("../../assets/images/cute-sleepy-kitten-website-header.jpg")}></Image>
        </View>
        <Text style={styles.text}>Send us a message!</Text>
        {/* Couldnt for the life of me get TextInput to work. */}
        <View style={styles.input}><Text>Name</Text></View>
        <View style={styles.input}><Text>Email</Text></View>
        <View style={styles.input}><Text>Message</Text></View>
        <View style={styles.button}>
          <Text style={{fontFamily: 'gillBold', textAlign: "center",}}>Submit</Text>
          </View>
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
    image: {
        backgroundColor: "#000",
        height: 100,
        marginBottom: 15,
    }, 
    input: {
      height: 50,
      backgroundColor: "#FFF",
      marginBottom: 15,
      borderWidth: 1,
      paddingLeft: 5,
      paddingTop: 13,
    },
    button: {
      width: "35%",
      padding: (5, 10),
      color: "#000",
      backgroundColor: "#FFF",
    }
  })