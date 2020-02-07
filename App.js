import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Constants from "expo-constants";
import axios from "axios";
import Header from "./components/Header";
import Rooms from "./components/Rooms";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://airbnb-api.now.sh/api/room?city=paris")
      .then(res => {
        setData(res.data);
      })
      .catch(erro => {
        console.warn(erro);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView horizontal={false}>
        <Rooms data={data} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
