import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Trending from '../../Components/Trending'

const hot = () => {
  return (
    <View style={{flex: 1,}}>
      <Trending/>
    </View>
  )
}

export default hot

const styles = StyleSheet.create({})