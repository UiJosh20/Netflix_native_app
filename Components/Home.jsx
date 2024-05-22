import { ActivityIndicator, Button, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState([])
  // let url = "https://api.github.com/users"
  const apiKey = '86ea365e1002d9d79178416518dded40'
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`

  useEffect(() => {
    setLoading(true)
    axios.get(url)
    .then((res)=>{
      console.log(res.data)
      setLoading(false)
      setData(res.data.results)
    }) 
  }, [])
  
 
  const renderHorizontalList = () => (
    <FlatList
      data={data}
      horizontal={true}
      renderItem={({ item }) => (
        <View style={styles.list}>
          <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.image} />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    />
  )

  const renderVerticalGrid = () => (
    <FlatList
      data={data}
      horizontal={true}
      renderItem={({ item }) => (
        <View style={styles.listGrid}>
          <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.image} />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerGrid}
    />
  )

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size='large' color='#fff' />
      ) : (
        <ScrollView>
          <Text style={styles.headertext}>Popular Movies</Text>
          {renderHorizontalList()}

          <Text style={styles.headertext}>Top Rated Movies</Text>
          {renderVerticalGrid()}

          <Text style={styles.headertext}>Upcoming Movies</Text>
          {renderHorizontalList()}
        </ScrollView>
      )}
    </View>
  )
}

export default Home

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     paddingVertical: 20,
//   },
//   contentContainer: {
//     paddingLeft: 10,}
// })
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  
  },
  text: {
    color: '#fff',
    width: 120,
    fontFamily:'sans-serif',
  },

  headertext: {
    color: '#fff',
    fontWeight:'bold',
    fontSize: 30,
    

  },
  list:{
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 110,
    height: 200,
    borderRadius: 10,
  },
 
})