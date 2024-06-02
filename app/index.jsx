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

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
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
          keyboardAppearance="default"
          keyboardType="email-address"
        ></TextInput>
        <TextInput
          style={styles.inputpassword}
          placeholder="Password"
          secureTextEntry
        ></TextInput>
        <TouchableOpacity style={styles.loginbtn} >
          <Text style={styles.loginbtntext}>Login</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  input: {
    borderColor: "white",
    marginTop: 100,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: 5,
  },
  inputpassword: {
    borderColor: "white",
    marginVertical: 20,
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
    borderRadius: 12,
  },

  loginbtntext: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  }
});
