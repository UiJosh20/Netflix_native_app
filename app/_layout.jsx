import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Rootlayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false,headerStyle:{backgroundColor:"#000000"}  }}  />
      <Stack.Screen name="signup" options={{title:"",  headerStyle:{backgroundColor:"#000000",}, statusBarHidden:true, headerTintColor:"#ffffff"}} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default Rootlayout

