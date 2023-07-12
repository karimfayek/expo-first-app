import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
  } from 'react-native';

const Categories = ({ OnPress }) => {
    return (
        <View style={styles.container}>
                
          <FlatList style={{marginTop: 40}} horizontal showsHorizontalScrollIndicator={false}   data={categoriesList}     
             ItemSeparatorComponent= {() => <View style={{padding: 5}} />}
  
            renderItem={({item, index}) => {
                const label = item.label;
                return (
                  <View key={index} style={{alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={OnPress}
                      style={{
                        ...shadow,
                        backgroundColor: appColors.yellow,
                        height: 70,
                        width: 70,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 50,
                      }}>
                    </TouchableOpacity>
                    <View style={{marginTop: 15}}>
                      <Text
                        style={{
                          fontSize: 14, color:'white'
                          }}>
                        {label}
                      </Text>
                    </View>
                  </View>
                );
            }
            }
            />
        </View>
    )
}

export const appColors={
    primary:'#00C569',
    secondary:"#fff",
    white:"#ffffff",
    black:"#000",
    yellow:"#FFC107",
    redOrange:"#FF3D00",
    red:"#E80057",
    darkGray:"#929292",
    lightGray:'#DDDDDD',
    gray:"#BEBEBE",
    lightGreen:"rgba(0,197,105, 0.2)"
}
export const categoriesList = [
    {
        label: 'Men'
        
    },
    {
        label: 'Women'
        
    },
    {
        label: 'Devices'
        
    },
    {
        label: 'Gaming'
        
    },
    {
        label: 'Gadget'
        
    },
    {
    label: 'Gadget'

    },
    {
    label: 'Gadget'

    },
    {
    label: 'Gadget'

    },
];
const styles = {

    container: {
      flex: 1,
      backgroundColor: 'black',
      paddingBottom : 20,
      flexDirection : 'column'
  
    },
}

export const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    //shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  }

export default Categories