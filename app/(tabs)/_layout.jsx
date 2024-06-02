import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tablayout = () => {
  const [firstName, setFirstName] = useState('Home');

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then((userDataString) => {
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          setFirstName(userData.firstName || 'Home');
        }
      })
      .catch((e) => {
        console.error('Failed to retrieve user data:', e);
      });
  }, []);

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

          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'hot') { 
            iconName = focused ? 'flame' : 'flame-outline';
          } else if (route.name === 'setting') { 
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
        name='home'
        options={{ title: firstName }}
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

