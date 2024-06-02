import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Collapsible from "react-native-collapsible";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Setting = () => {
  const [activeSection, setActiveSection] = useState(null);
  const router = useRouter();

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleLogout = () => {
    let user = AsyncStorage.getItem("user")
    if (user){
      router.push("/")
    }else{
      Alert.alert("Error", "You are not logged in")
    }
  };

  const handleDeleteAccount = () => {
    AsyncStorage.clear()
      .then(() => {
        Alert.alert("Success", "Account deleted successfully");
        router.push("/");
      })
      .catch((e) => {
        Alert.alert("Error", "Failed to delete account");
      });
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => toggleSection("general")}
        style={styles.header}
      >
        <Text style={styles.headerText}>General Settings</Text>
        <Ionicons
          name={activeSection === "general" ? "chevron-up" : "chevron-down"}
          size={20}
          color="white"
        />
      </TouchableOpacity>
      <Collapsible collapsed={activeSection !== "general"}>
        <View style={styles.content}>
          <Text style={styles.text}>User profile</Text>
        </View>
      </Collapsible>

      <TouchableOpacity
        onPress={() => toggleSection("account")}
        style={styles.header}
      >
        <Text style={styles.headerText}>Account Settings</Text>
        <Ionicons
          name={activeSection === "account" ? "chevron-up" : "chevron-down"}
          size={20}
          color="white"
        />
      </TouchableOpacity>
      <Collapsible collapsed={activeSection !== "account"}>
        <View style={styles.content}>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.text}>Log out</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDeleteAccount}
            style={styles.deleteBtn}
          >
            <Text style={styles.deleteText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </Collapsible>

      <TouchableOpacity
        onPress={() => toggleSection("notifications")}
        style={styles.header}
      >
        <Text style={styles.headerText}>Notification Settings</Text>
        <Ionicons
          name={
            activeSection === "notifications" ? "chevron-up" : "chevron-down"
          }
          size={20}
          color="white"
        />
      </TouchableOpacity>
      <Collapsible collapsed={activeSection !== "notifications"}>
        <View style={styles.content}>
          <Text style={styles.text}>Notification settings</Text>
        </View>
      </Collapsible>
    </ScrollView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  headerText: {
    color: "white",
    fontSize: 18,
  },
  content: {
    padding: 10,
    backgroundColor: "#444",
    marginVertical: 5,
    borderRadius: 5,
  },
  text: {
    color: "white",
  },
  deleteBtn: {
    marginTop: 10,
  },
  deleteText: {
    color: "red",
  },
});
