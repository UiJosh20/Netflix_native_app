import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Tablayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: 'black',
          borderBlockColor:'black',
        },
        tabBarLabelStyle: {
          color: '#fff',
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'index') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'hot') { 
            iconName = focused ? 'flame' : 'flame-outline';
          }else if (route.name === 'setting') { 
            iconName = focused ? 'settings' : 'settings-outline';
          }


          return <Ionicons name={iconName} size={size} color={color} />;
        },
          headerRight: () => (
           <View style={{ flexDirection: 'row', marginRight: 10 }}>
            <Ionicons name="search" size={25} color="white" style={{ marginRight: 10 }} />
          </View>
        ),
      })}
    >
      <Tabs.Screen
        name='index'
        options={{ title: "Home" }}
      />
      <Tabs.Screen
        name='hot'
        options={{ title: "Trending" }} 
      />
      <Tabs.Screen
        name='setting'
        options={{ title: "My Netflix" }} 
      />
    </Tabs>
  );
}

export default Tablayout;
