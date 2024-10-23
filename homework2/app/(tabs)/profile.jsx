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
    <View>
      <Text>profile</Text>
      <Button mode='text' onPress={handleSignOut}>
        <Text>Sign Out</Text>
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({})