import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "../Home";
import Login from "../Login";
import Contact from "../screens/Contact";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerShown: false
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="HomeMain" component={Home} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ContactStackNavigator };