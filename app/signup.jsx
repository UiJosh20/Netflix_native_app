import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router } from "expo-router";

const signup = () => {
  return (
    <SafeAreaView style={styles.container}>
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
          keyboardAppearance="default"
        ></TextInput>
        <TextInput
          style={styles.inputpassword}
          placeholder="Last Name"
          keyboardAppearance="default"
        ></TextInput>

        <TextInput
          style={styles.inputpassword}
          placeholder="Email Address"
          keyboardAppearance="default"
          keyboardType="email-address"
        ></TextInput>
        <TextInput
          style={styles.inputpassword}
          placeholder="Password"
          secureTextEntry
        ></TextInput>
        <TouchableOpacity style={styles.loginbtn}>
          <Text style={styles.loginbtntext}>Signup</Text>
        </TouchableOpacity>
      </View>

    
    </SafeAreaView>
  );
};

export default signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  input: {
    borderColor: "white",
    marginTop: 50,
    marginBottom: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: 5,
  },
  inputpassword: {
    borderColor: "white",
    marginVertical: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: 5,
  },
  form: {
    paddingHorizontal: 20,
    width: "100%",
  },
  loginbtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B20710",
    padding: 7,
    marginVertical: 20,
    borderRadius: 12,
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
