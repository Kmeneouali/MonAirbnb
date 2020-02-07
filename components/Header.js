import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MonAirbnb</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 90,

    backgroundColor: "tomato",
    paddingTop: Constants.statusBarHeight
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default Header;
