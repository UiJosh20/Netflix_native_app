
import { Platform, SafeAreaView, StyleSheet, StatusBar, Text, View } from 'react-native';
import Home from './Components/Home';
import Splash from './Components/Splash';
import { useEffect, useState } from 'react';

export default function App() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
   const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)
    return () => clearTimeout(timer);
  })
  return (
    <View style={style.container}>
    <StatusBar backgroundColor='#000' barStyle='light-content' />
    {visible ? <Splash /> : <Home />}
  </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
  }
})