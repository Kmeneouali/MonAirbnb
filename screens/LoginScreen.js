import React, { useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { emailValidator, passwordValidator } from "../core/utils";

export default function LoginScreen() {
  // Declaration des variables

  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const navigation = useNavigation();
  // Methods

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    axios
      .post("https://airbnb-api.now.sh/api/user/log_in", {
        headers: {
          "Content-Type": "application/json"
        },
        email: email.value,
        password: password.value
      })
      .then(res => {
        AsyncStorage.setItem("account", JSON.stringify(res.data));
        console.log(res.data);
        navigation.navigate("ListScreen");
      });
  };

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
          value={email.value}
          onChangeText={text => setEmail({ value: text, error: "" })}
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="white"
          placeholder="Password"
          value={password.value}
          onChangeText={text => setPassword({ value: text, error: "" })}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={_onLoginPressed}>
          <Text style={styles.buttonText}>Button</Text>
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
    height: "25%",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "25%"
  },
  keyboardWrapper: {
    height: "75%",
    width: "100%",
    alignItems: "center"
  },
  textLogo: {
    color: "white",
    fontWeight: "300",
    fontSize: 50,
    marginTop: 10
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
    marginTop: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#FF5A5F",
    fontSize: 34
  }
});
