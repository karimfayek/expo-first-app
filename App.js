import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component, useState, useEffect, createContext } from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './app/navigation/DrawerNavigator';
import store from './app/redux/store';


export const TasksContext = createContext(null);

export default function App() {
  const [cart, setCart] = useState([])
  const cartLenght = cart.length 
  useEffect(() => {
    getCart();

  }, [cartLenght]);
  const getCart = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("cart");
      if (jsonValue != null) {
        console.log('inside get cart', JSON.parse(jsonValue))
        setCart(JSON.parse(jsonValue))
        return
      } else {
        console.log('nodata')
      }
    } catch (e) {
      console.log('error' + e)
    }
  }
  return (

<Provider store={store}>
    <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
  </Provider>



  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
