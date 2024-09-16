import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>contact</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        paddingTop: 25,
        backgroundColor: "#990000",
    },
    title: {
        textTransform: "uppercase",
        paddingTop: 25,
        fontSize: 50,
        fontFamily: 'mont-bold'
    }
})