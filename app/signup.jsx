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
import React, { useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

    const handleSignup = () => {
      if (firstName && lastName && email && password) {
        const userData = {
          firstName,
          lastName,
          email,
          password,
        };
        AsyncStorage.setItem("user", JSON.stringify(userData))
          .then(() => {
            Alert.alert("Success", "Account created successfully");
            router.push("/");
          })
          .catch((e) => {
            Alert.alert("Error", "Failed to save user data");
          });
      } else {
        Alert.alert("Error", "Please fill all the fields");
      }
    };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
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
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
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
          <TouchableOpacity style={styles.loginbtn} onPress={handleSignup}>
            <Text style={styles.loginbtntext}>Signup</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Signup;

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
    marginVertical: 20,
    borderRadius: 12,
  },
  loginbtntext: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
