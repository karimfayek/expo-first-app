import React from 'react';

import {
    StyleSheet,
    Text,
  } from 'react-native';
 
  
const  Content = () => {
    
    return (


        <Text style={styles.text}>  This is Content</Text>

    );


}
const styles= StyleSheet.create({
   
    text :{
        alignItems : 'center' ,
        justifyContent: 'center',
      fontWeight : 'bold' ,
      fontSize : 20 ,
    }
   });

export default Content;