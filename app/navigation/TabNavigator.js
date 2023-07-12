// ./navigation/TabNavigator.js

import React from "react";
import { useState, useContext } from 'react';
import Ionicons  from 'react-native-vector-icons/Ionicons';  
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  View , Text} from 'react-native';

import { TasksContext } from "../../App";
import { MainStackNavigator ,ContactStackNavigator ,CartStackNavigator} from "./StackNavigator";
import Cart from "../screens/Cart";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const cartLenght = 0
  console.log('tasks', cartLenght)
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Contact') {
              iconName = focused ? 'ios-mail' : 'ios-mail-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'ios-cart' : 'ios-cart-outline';
            }

            // You can return any component that you like here!
            if (route.name === 'Cart'){
              return (
              <>
                <Ionicons name={iconName} size={size} color={color} />
                <Text style={{position: 'absolute' , top: 0, paddingLeft:35, color:'red' , fontWeight:'bold'}}>{cartLenght}</Text>
              </>
              )
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
         >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
      <Tab.Screen name="Cart" component={CartStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;