import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "../Home";
import Login from "../Login";
import Contact from "../screens/Contact";
import Product from "../screens/Product";
import Cart from "../screens/Cart";

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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
const CartStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}


export { MainStackNavigator, ContactStackNavigator, CartStackNavigator };