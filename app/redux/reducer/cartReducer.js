import { ADD, REMOVE } from "../actions/types"

import AsyncStorage from '@react-native-async-storage/async-storage';

import { ToastAndroid } from 'react-native';
const getCart = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("cart");
      if (jsonValue != null) {
        console.log('inside reducer get cart', JSON.parse(jsonValue))
        
        return
      } else {
        console.log('nodata')
      }
    } catch (e) {
      console.log('error' + e)
    }
  }
const cartReducer = async (state = {} , action) => {


    
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
    switch (action.type){
        case ADD :
           qty = 1
            let itemArray = await AsyncStorage.getItem("cart");
            itemArray = JSON.parse(itemArray);
        
            if (itemArray) {
              const isAdded = alreadyAdded({
                'id': action.item.id,
        
              }, itemArray)
              //if product not already added to cart push it to cart array as object 
              if (isAdded != true) {
                let array = itemArray;
                array.push({
                  'id': action.item.id,
                  'name': action.item.name,
                  'image': action.item.image,
                  'price': action.item.price,
                  'qty': 1,
                });
                const jsonValue = JSON.stringify(array)
                await AsyncStorage.setItem("cart", jsonValue);
                ToastAndroid.show(
                  'Item Added Successfully to cart',
                  ToastAndroid.LONG,
                );
                console.log(alreadyAdded({
                  'id': action.item.id,
        
                }, itemArray))
                //else if cart has content and the current product already added to it , increase its quantity 
              } else {
                objIndex = itemArray.findIndex((obj => obj.id == action.item.id));
                itemArray[objIndex].qty = qty
                await AsyncStorage.setItem("cart", JSON.stringify(itemArray));
                ToastAndroid.show(
                  'Item Added Successfully to cart',
                  ToastAndroid.SHORT,
                );
              }
              // else if no cart items create new one 
            } else {
              const jsonValue = JSON.stringify(action.item)
              await AsyncStorage.setItem("cart", jsonValue);
              ToastAndroid.showWithGravity(
                'Item Added Successfully to cart',
                ToastAndroid.LONG,
              );
            }
            const jsonValue = await AsyncStorage.getItem("cart");
            if (jsonValue != null) {
             
              newcart= JSON.parse(jsonValue)
              state = [...newcart]
              console.log('inside reducer', state)
              return [...state]
            } else {
              console.log('nodata')
            }
        case REMOVE:
            return 2 
        default :
            return state
    }
   

}

export default cartReducer