import { ActivityIndicator, Button, FlatList, Image, Platform, RefreshControl, RefreshControlComponent, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

const Home = () => {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const apiKey = '86ea365e1002d9d79178416518dded40'
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`



  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    setLoading(true)
    axios.get(url)
      .then((res) => {
        console.log(res.data)
        setLoading(false)
        setData(res.data.results)
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }


  const onRefresh = () => {
    setRefreshing(true)
    axios.get(url)
      .then((res) => {
        setData(res.data.results)
        setRefreshing(false)
      })
      .catch((error) => {
        console.error(error)
        setRefreshing(false)
      })
  }

  const shuffleArray = (array) => {
    let shuffledArray = array.slice()
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
    }
    return shuffledArray
  }

  return (
    <View style={styles.container}>
      <Navbar />
      {isLoading ? (
        <ActivityIndicator size='large' color='#fff' style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Text style={styles.headertext}>Popular Movies</Text>
          <FlatList
            data={shuffleArray(data)}
            horizontal={true}
            renderItem={({ item }) => (
              <View style={styles.list}>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.image} />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}

          />

          <Text style={styles.headertext}>Top Rated Movies</Text>
          <FlatList
            data={shuffleArray(data)}
            horizontal={true}
            renderItem={({ item }) => (
              <View style={styles.listGrid}>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.image} />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}


          />

          <Text style={styles.headertext}>Upcoming Movies</Text>
          <FlatList
            data={shuffleArray(data)}
            horizontal={true}
            renderItem={({ item }) => (
              <View style={styles.listGrid}>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.image} />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}


          />
        </ScrollView>
      )}
    </View>
  )
}

export default Home


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Platform.OS==='android'? StatusBar.currentHeight: 0,


  },
 
  text: {
    color: '#fff',
    width: 120,
    fontFamily: 'sans-serif',
  },

  headertext: {
    color: 'goldenrod',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,


  },
  list: {
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 110,
    height: 200,
    borderRadius: 10,
  },

  listGrid: {
    alignItems: 'center',
    margin: 10,
  },
})