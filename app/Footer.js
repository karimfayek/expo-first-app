import React from 'react';

import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';
 
  
const  Footer = () => {
    
    return (
  

        <View  style={styles.header}>
            <Text style={styles.text}> Footer </Text>
        </View>

       
    );


}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#000' ,
      height : 80 ,
      alignItems : 'center' ,
      justifyContent: 'center',
      borderTop : '1px solid #fff',
      
    },
    text :{
      fontWeight : 'bold' ,
      fontSize : 15 ,
      color: '#fff'
    }
   });
export default Footer;