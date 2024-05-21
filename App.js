
import { Platform, SafeAreaView, StyleSheet, StatusBar, Text, View } from 'react-native';
import Home from './Components/Home';

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <Home />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: Platform.OS==='android'? StatusBar.currentHeight: 0,
  }
})