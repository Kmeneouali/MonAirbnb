import React from "react";
import { StyleSheet, View, Text, Image, ActivityIndicator } from "react-native";
import Room from "./Room";

const Rooms = props => {
  const { data } = props;
  if (!data) {
    return <ActivityIndicator />;
  }
  return (
    <>
      {data.rooms.map((room, index) => {
        return (
          <Room
            key={index}
            title={room.title}
            photo={room.photos[0]}
            ratingValue={room.ratingValue}
            price={room.price}
            user={room.user.account.photos[0]}
          />
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default Rooms;
