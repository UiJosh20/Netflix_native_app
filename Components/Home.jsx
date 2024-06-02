import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Platform,
  RefreshControl,
  RefreshControlComponent,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {useFonts} from "expo-font";


const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const apiKey = process.env.API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

useFonts
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        setData(res.data.results);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const onRefresh = () => {
    setRefreshing(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data.results);
        setRefreshing(false);
      })
      .catch((error) => {
        console.error(error);
        setRefreshing(false);
      });
  };

  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };


  const MovieCard = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.image}
      />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Image source={require("../assets/anim.gif")} />
        </View>
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${data[10]?.poster_path}`,
              }}
              style={styles.singlePhoto}
            />
            <Text style={styles.textposition}>{data[10]?.title}</Text>
            <View
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 30,
                position: "absolute",
                top: 250,
                width: "100%",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#B20710",
                  width: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                >
                  Play
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "grey",
                  width: 120,
                  alignItems: "center",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                >
                  Watch later
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.headertext}>Popular Movies</Text>

          <FlatList
            data={shuffleArray(data)}
            horizontal={true}
            snapToInterval={100}
            
            renderItem={({ item }) => (
              <View style={styles.list}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                  style={styles.image}
                />
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
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                  style={styles.image}
                />
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
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                  style={styles.image}
                />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  text: {
    color: "#fff",
    width: 120,
    fontFamily: "sans-serif",
  },

  textposition: {
    color: "#fff",
    fontSize: 27,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    textAlign: "center",
    position: "relative",
    top: -330,
    // left: 50,
  },

  headertext: {
    color: "goldenrod",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 20,
  },
  list: {
    alignItems: "center",
    marginRight: 10,
  },
  image: {
    width: 110,
    height: 200,
    borderRadius: 10,
  },

  listGrid: {
    alignItems: "center",
    margin: 10,
    marginVertical: 20,
  },
  singlePhoto: {
    height: 500,
    opacity: 0.4,
  },
});
