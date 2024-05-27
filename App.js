
import { Platform, SafeAreaView, StyleSheet, StatusBar, Text, View } from 'react-native';
import Home from './Components/Home';

import { useEffect, useState } from 'react';

export default function App() {

  return (
    <View style={style.container}>
    <StatusBar backgroundColor='#000' barStyle='light-content' />
   <Home/>
  </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
  }
})