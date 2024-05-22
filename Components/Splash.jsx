import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/netflix.png')} style={styles.image} resizeMode='contain'  />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 270,
    marginBottom: 20, 
  },
  activityIndicator: {
    marginTop: 200, 
  },
});
