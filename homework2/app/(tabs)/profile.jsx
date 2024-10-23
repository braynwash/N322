import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useClerk } from '@clerk/clerk-expo'
import { useNavigation } from 'expo-router';
import { Button } from "react-native-paper";
import { Colors } from "@/constants/Colors";

export default function profile() {

  const { signOut } = useClerk();
  const navigation = useNavigation();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigation.replace("index")
    } catch(error) {
      console.log("Sign out error", error);
    }
  }

  return (
    <View style={styles.content}>
      <Text style={styles.header}>You are currently signed in.</Text>
      <Button style={styles.btn} mode='text' onPress={handleSignOut}>
        <Text style={styles.whitetxt}>Sign Out</Text>
        </Button>
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
  btn: {
    marginTop: 15,
    backgroundColor: Colors.BLUE,
    padding: 5,
    borderRadius: 50,
    width: "50%"
  },
  whitetxt: {
    color: Colors.WHITE,
    textAlign: "center",
    fontSize: 16,
  }
})