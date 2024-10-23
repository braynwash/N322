import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import {Colors} from "@/constants/Colors"

export default function tabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.BLUE,
     }}>
      <Tabs.Screen name="index"  options={{headerShown: false, 
    tabBarIcon: ({color}) => <Ionicons name='home' size={24} color={color}/> }}/>
      <Tabs.Screen name="products" options={{headerShown:false, 
    tabBarIcon: ({color}) => <Ionicons name='planet' size={24} color={color}/> }}/>
      <Tabs.Screen name="profile" options={{headerShown:false, 
    tabBarIcon: ({color}) => <Ionicons name='person' size={24} color={color}/>}}/>
    </Tabs>
  )
}