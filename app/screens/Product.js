import React, { useCallback, useState } from 'react';
import { useFonts } from 'expo-font';

import { TouchableOpacity, View, Text, Image, ScrollView, ToastAndroid } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ADD } from '../redux/actions/types';


function Product({ route, navigation }) {

  const [product, setProduct] = useState({ 'name': 'test' });
  const [image, setImage] = useState('null');
const cartR = useSelector(state => state)
console.log(cartR)
  var { id } = route.params;
  React.useEffect(() => {
    axios.get(`http://beka.trustits.net/api/product/${id}`).then((response) => {

      setProduct(response.data.product);
      setImage(response.data.image);
    })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  
  useFonts({
    'Rubik-Medium': require('../src/fonts/Rubik-Medium.ttf'),
    'Rubik-Regular': require('../src/fonts/Rubik-Regular.ttf'),
  });

  const [qty, setQty] = useState(1);


  const item = [{
    'id': product.id,
    'name': product.name,
    'image': image,
    'price': product.price,
    'qty': qty,
  }]

const dispatch = useDispatch();
const addCart = () =>{
  dispatch(
    {
      type : ADD,
      item : [{
        'id': product.id,
        'name': product.name,
        'image': image,
        'price': product.price,
        'qty': qty,
      }]
    }
  )
}
  const addCarts = async () => {
    setQty(qty + 1)
    let itemArray = await AsyncStorage.getItem("cart");
    itemArray = JSON.parse(itemArray);

    if (itemArray) {
      const isAdded = alreadyAdded({
        'id': product.id,

      }, itemArray)
      //if product not already added to cart push it to cart array as object 
      if (isAdded != true) {
        let array = itemArray;
        array.push({
          'id': product.id,
          'name': product.name,
          'image': image,
          'price': product.price,
          'qty': 1,
        });
        const jsonValue = JSON.stringify(array)
        await AsyncStorage.setItem("cart", jsonValue);
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        console.log(alreadyAdded({
          'id': product.id,

        }, itemArray))
        //else if cart has content and the current product already added to it , increase its quantity 
      } else {
        objIndex = itemArray.findIndex((obj => obj.id == product.id));
        itemArray[objIndex].qty = qty
        await AsyncStorage.setItem("cart", JSON.stringify(itemArray));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
      }
      // else if no cart items create new one 
    } else {
      const jsonValue = JSON.stringify(item)
      await AsyncStorage.setItem("cart", jsonValue);
      ToastAndroid.showWithGravity(
        'Item Added Successfully to cart',
        ToastAndroid.LONG,
      );
    }


  }

  function alreadyAdded(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].id === obj.id) {
        console.log('yes')
        return true;
      }
    }
    console.log('no')
    return false;
  }




  return (

    <SafeAreaView style={{ height: '100%', width: '100%', backgroundColor: '#fafafa' }}>
      <ScrollView>


        <View style={{ height: 500, padding: 2 }}>
          <Image
            source={{ uri: 'http://beka.trustits.net/storage/products/mobile_photos/' + image }}
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            margin: 10,
          }}>
          <View style={{ flex: 1, alignItems: 'flex-start' }}>
            <Text style={{ ...FONTS.product_title_text }}>{product.name}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text style={{ ...FONTS.product_title_text }}>L.E{product.price}</Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          display: 'flex',
          ...FONTS.box_shadow,
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          bottom: 0,
          height: 70,
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fafafa',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => addCart(route.params.id)}>
            <Text style={{ color: COLORS.black, ...FONTS.big_button_text }}>
              ADD TO BAG
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#DA1C4C',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Cart', {
                id: id,
                name: product.name,
                price: product.price,
              });
            }}>
            <Text style={{ color: COLORS.white, ...FONTS.big_button_text }}>
              BUY NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>

  )
}
export const COLORS = {
  // colors
  black: '#1E1F20',
  white: '#FFFFFF',
  lightGray: '#ABAFB8',
  gray: '#BEC1D2',
  light1: '#f2f2f2',
  light2: '#8c8c8c',
  cat_title_color: '#212121',
};
export const FONTS = {
  product_title_text: {
    fontFamily: 'Rubik-Medium',
    fontSize: 18,
    lineHeight: 22,
  },
  big_button_text: { fontFamily: 'Rubik-Regular', fontSize: 18, lineHeight: 60 },
  checkout_btn_text: {
    fontFamily: 'Rubik-Regular',
    fontSize: 24,
    lineHeight: 60,
  },
}
export default Product