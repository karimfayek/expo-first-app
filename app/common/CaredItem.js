import React from 'react';
 
 import {
   View,
 } from 'react-native';

 const CardItem = (props) => {
    return(
        <View>
            {props.children}
        </View>
    )
 }

 export {CardItem};