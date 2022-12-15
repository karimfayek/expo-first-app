import React , { useCallback } from 'react';
import { useFonts } from 'expo-font';

import {TouchableOpacity, View, Text, Image, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Product = ({route, navigation})  => {
    var {id, title, price, img} = route.params;
    const [fontsLoaded] = useFonts({
        'Rubik-Medium': require('../src/fonts/Rubik-Medium.ttf'),
        'Rubik-Regular': require('../src/fonts/Rubik-Regular.ttf'),
      });
      
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
   
    <SafeAreaView style={{height: '100%', width: '100%', backgroundColor: '#fafafa'}}>
      <ScrollView>


        <View style={{height: 500, padding: 2}}>
          <Image
            source={{uri: img}}
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
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <Text style={{...FONTS.product_title_text}}>{title}</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={{...FONTS.product_title_text}}>L.E{price}</Text>
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
            onPress={() => {
              navigation.navigate('Cart', {
                id: id,
                name: title,
                img: img,
                price: price,
              });
            }}>
            <Text style={{color: COLORS.black, ...FONTS.big_button_text}}>
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
                name: title,
                img: img,
                price: price,
              });
            }}>
            <Text style={{color: COLORS.white, ...FONTS.big_button_text}}>
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