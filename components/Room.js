import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import Separator from "./Separator";
import { AntDesign } from "@expo/vector-icons";
const Room = props => {
  const { photo, title, ratingValue, price, user } = props;
  const createTable = () => {
    let table = [];

    for (let i = 0; i < Number(ratingValue); i++) {
      table.push(<AntDesign name="star" size={20} color="#e6b91e" />);
    }
    if (table.length < 5) {
      for (let i = table.length; i < 5; i++) {
        table.push(<AntDesign name="star" size={20} color="#c1c1c1" />);
      }
    }
    return table;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerPhoto}>
        {/*  Image & Price */}
        <Image style={styles.photo} source={{ uri: photo }}></Image>
        <View style={styles.containerPrice}>
          <Text style={styles.textPrice}>{price} €</Text>
        </View>
      </TouchableOpacity>
      {/*  Descreption Room & User */}
      <View style={styles.Containerdescription}>
        <View>
          <Text style={{ fontSize: 18, maxWidth: 240 }}>{title}</Text>
          <Text>{createTable()}</Text>
        </View>
        {/*   <View style={styles.user}> */}
        <Image style={styles.photoUser} source={{ uri: user }}></Image>
        {/*   </View> */}
      </View>

      <Separator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    minHeight: 300
  },
  containerPhoto: {
    height: "70%"
  },
  photo: {
    height: "100%",
    resizeMode: "stretch",
    position: "relative"
  },
  containerPrice: {
    position: "absolute",
    top: "70%",
    width: 90,
    height: 50,
    margin: 5,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  textPrice: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  },
  Containerdescription: {
    height: "30%",
    flexDirection: "row"
  },
  photoUser: {
    position: "absolute",
    right: 0,
    margin: 5,
    width: 80,
    height: 80,
    resizeMode: "stretch",
    borderRadius: 500
  }
});

export default Room;
