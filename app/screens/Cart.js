
import { COLORS, SIZES, FONTS } from '../common/theme';

import AntDesign from 'react-native-vector-icons/AntDesign';

import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Cart = () => {
  useFonts({
    'Rubik-ExtraBold': require('../src/fonts/Rubik-ExtraBold.ttf'),
    'Rubik-SemiBold': require('../src/fonts/Rubik-SemiBold.ttf'),
    'Rubik-Medium': require('../src/fonts/Rubik-Medium.ttf'),
  });
  const navigation = useNavigation();
  var price = 50
  const [state, setState] = useState([])
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    getCart();

  }, []);
  const isEmptyCart = cart.length === 0
  if (isEmptyCart) {
    message = <View  style={{  alignItems:'center'}}>

<Text style={{padding:10 , textAlign:'center' , width:'90%' ,backgroundColor:'white'}}> Cart Empty</Text>
    </View>
  } else {
    message = <Text></Text>
  }
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
  const deleteCart = async () => {
    try {
      await AsyncStorage.removeItem('cart')
      setCart([])
    } catch (e) {
      // remove error
    }

    console.log('Done.')
  }
  const deleteItemFromCart = async (item) => {
    objIndex = cart.findIndex((obj => obj.id == item));
    const newCart = [...cart];
    newCart.splice(objIndex, 1);
    await AsyncStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart)
  }
  return (

    <SafeAreaView>
      <ScrollView
        style={{ height: '100%', width: '100%', backgroundColor: COLORS.light1 }}>
        {cart.map(item => (
          <View key={item.id}
            style={{
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              height: 200,
              margin: 10,

              backgroundColor: COLORS.white,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <View style={{ flex: 2, justifyContent: 'space-evenly' }}>
                <Text style={{ ...FONTS.product_title_text }}>
                  {item.name}
                </Text>
                <Text style={{ ...FONTS.product_title_text }}>
                  {item.price}
                </Text>

              </View>
              <View style={{ flex: 1 }}>
                <Image
                  source={{ uri: 'img' }}
                  resizeMode="contain"
                  style={{
                    width: 100,
                    height: 120,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                padding: 10,
                position: 'absolute',
                bottom: 0,
                marginBottom: 20,
                marginLeft: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <View
                style={{
                  flex: 2,
                  marginTop: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignContent: 'center',
                }}>
                <AntDesign name='delete' size={20} color='black' />
                <TouchableOpacity onPress={() => deleteItemFromCart(item.id)}>

                  <Text style={{ ...FONTS.cart_text, marginLeft: 10 }}>Remove</Text>

                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ ...FONTS.cart_text }}>Qty : {item.qty}</Text>
              </View>
            </View>
          </View>
        )

        )}




        {/* Footer */}
{message}
        <View
          style={{
            display: 'flex',
            borderRadius: 4,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 60,
            padding: 10,
            minHeight: 200,
            height: '100%',
            flexDirection: 'column',
            backgroundColor: COLORS.white,
          }}>


          <View
            style={{
              marginTop: 10,
              marginLeft: 4,
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <View style={{ flex: 4 }}>
              <Text style={{ ...FONTS.cart_text }}>Bag Total</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ ...FONTS.product_title_text }}>₹{price}</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              marginLeft: 4,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <View style={{ flex: 4 }}>
              <Text style={{ ...FONTS.cart_text }}>Shipping Charge</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ ...FONTS.product_title_text }}>₹{price}</Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
              marginLeft: 4,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <View style={{ flex: 4 }}>
              <Text style={{ ...FONTS.product_title_text }}>
                Product Discount
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ ...FONTS.product_title_text, color: '#00964D' }}>
                - ₹50
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
              marginLeft: 4,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <View style={{ flex: 4 }}>
              <Text style={{ ...FONTS.product_title_text }}>Total Payable</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ ...FONTS.product_title_text }}>
                ₹50
              </Text>
            </View>
          </View>
        </View>

      </ScrollView>
      <View
        style={{
          ...FONTS.box_shadow,
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          position: 'absolute',
          bottom: 0,
          height: 80,
          backgroundColor: '#000',
          flexDirection: 'row'
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#DA1C4C',
            width: '100%',
            minHeight: 60,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => deleteCart()} disabled={cart.length === 0}>
            <Text style={{ color: COLORS.white, ...FONTS.checkout_btn_text }}>
              Clear Cart
            </Text>
          </TouchableOpacity>

        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('CheckOut')} disabled={cart.length === 0}>
            <Text style={{ color: COLORS.black, ...FONTS.big_button_text }}>
              Check Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default Cart;
