
import { Platform, SafeAreaView, StyleSheet, StatusBar, Text, View } from 'react-native';


import { useEffect, useState } from 'react';
import Page from './app/(tabs)';

export default function App() {

  return (
    <View style={style.container}>
      <StatusBar backgroundColor='black' barStyle='light-content' />
   <Page/>
  </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
  }
})