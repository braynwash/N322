import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from "../../constants/Colors";

export default function _layout() {
  return (
    <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: Colors.links}}>
        <Tabs.Screen name="home" 
        options={{
            tabBarLabel: "HOME",
            tabBarIcon: ({color}) => (
                <Ionicons name="home" size={24} color={color} />
        ),
        }}/>
        <Tabs.Screen name="about"
        options={{
            tabBarLabel: "ABOUT",
            tabBarIcon: ({color}) => (
                <Ionicons name="help-circle" size={24} color={color} />
        ),
        }}/>
        <Tabs.Screen name="contact"
        options={{
            tabBarLabel: "CONTACT",
            tabBarIcon: ({color}) => (
                <Ionicons name="mail" size={24} color={color} />
        ),
        }}/>
    </Tabs>
  )
}