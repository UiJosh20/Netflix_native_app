import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  useEffect(() => {
     AsyncStorage.getItem("user")
       .then((userData) => {
         if (userData) {
           router.replace("/home");
         }
       })
       .catch((error) => {
         console.error("Error accessing local storage", error);
       });
  }, [])
  

  const handleLogin = () => {
    AsyncStorage.getItem("user")
      .then((userData) => {
        if (userData) {
          const userData = JSON.parse(userData);
          if (userData.email === email && userData.password === password) {
            Alert.alert("Success", "Login successful");
            router.push("/home");
          } else {
            Alert.alert("Error", "Invalid email or password");
          }
        } else {
          Alert.alert("Error", "No user found, please sign up");
        }
      })
      .catch((error) => {
        Alert.alert("Error", "No internet connection");
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 200,
        }}
      >
        <Image
          source={require("../assets/icon.png")}
          style={{ width: 70, height: 70, justifyContent: "center" }}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginbtn} onPress={handleLogin}>
          <Text style={styles.loginbtntext}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => router.push("signup")}>
        <Text style={styles.loginbtntext2}>
          Don't have an account? Tap here to sign up
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  input: {
    borderColor: "white",
    marginTop: 30,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: 10,
    color: "#000",
  },
  form: {
    paddingHorizontal: 20,
    width: "100%",
  },
  loginbtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B20710",
    padding: 15,
    borderRadius: 12,
    marginVertical: 20,
  },
  loginbtntext: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginbtntext2: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,
  },
});
