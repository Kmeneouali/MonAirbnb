import React from "react";
import { StyleSheet, View } from "react-native";
export default function Separator() {
  return <View style={styles.separator} />;
}
const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: "#c4c4c4",
    marginLeft: 15,
    marginRight: 15
  }
});
