import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function tabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{headerShown:false}}/>
      <Tabs.Screen name="products" options={{headerShown:false}}/>
      <Tabs.Screen name="profile" options={{headerShown:false}}/>
    </Tabs>
  )
}