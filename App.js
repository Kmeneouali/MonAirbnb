import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

import LoginScreen from "./screens/LoginScreen";
import ListScreen from "./screens/ListScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      {/* <Stack.Navigator headerMode="none">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
      </Stack.Navigator> */}

      <Drawer.Navigator initialRouteName="LoginScreen">
        <Drawer.Screen name="LoginScreen" component={LoginScreen} />
        <Drawer.Screen name="ListScreen" component={ListScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
