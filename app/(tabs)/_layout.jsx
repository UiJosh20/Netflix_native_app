import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const Tablayout = () => {
  return (
    <Tabs
    screenOptions={{}}
    >
        <Tabs.Screen name='index'
        options={{title:"Home"}}
        />
    </Tabs>
  )
}

export default Tablayout

