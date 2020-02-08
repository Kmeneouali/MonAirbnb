import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Entypo name="home" size={100} color="white" />
        <Text style={styles.textLogo}>Welcome</Text>
      </View>
      <KeyboardAvoidingView style={styles.keyboardWrapper}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="white"
          placeholder="Email"
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="white"
          placeholder="Password"
        />
        <TouchableOpacity style={styles.button}>
          <Text>Button</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FF5A5F"
  },
  containerLogo: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 120
  },
  keyboardWrapper: {
    flex: 2,
    width: "100%",
    alignItems: "center"
  },
  textLogo: {
    color: "white",
    fontWeight: "300",
    fontSize: 50,
    marginTop: 25
  },
  textInput: {
    color: "white",
    fontSize: 24,
    height: 54,
    width: "70%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    paddingLeft: 15
  },
  button: {
    height: 70,
    width: "50%",
    backgroundColor: "white",
    marginTop: 25,
    alignContent: "center",
    justifyContent: "center"
  }
});
