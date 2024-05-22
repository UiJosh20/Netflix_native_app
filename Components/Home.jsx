import { ActivityIndicator, Button, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState([])
  let url = "https://api.github.com/users"

  const loader = () => {
    setLoading(true)
    axios.get(url)
    .then((res)=>{
      console.log(res.data)
      setLoading(false)
      setData(res.data)
    })
  }


  return (
    <View style={styles.container}>
      
        <Button title='tap me' onPress={loader}/>   
        <ActivityIndicator size='large' animating={isLoading} ></ActivityIndicator>
        <FlatList
        data={data}
        
        renderItem={({item}) => (
          <View>
            <Text style={{color:'#fff'}}>{item.login}</Text>
            <Image source={{ uri: `https://robohash.org/${item.login}` }} width={70} height={70}/>
          </View>
        )}
        keyExtractor={(item)=>item.id}
        >

        </FlatList>
     
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  
  },
 
})