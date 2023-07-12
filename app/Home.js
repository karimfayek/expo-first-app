/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 
 */

 import axios from 'axios';
import React , {Component , useState} from 'react';
import Categories from './screens/Categories';
import { useNavigation } from '@react-navigation/native';

 import {
   StyleSheet,
   View,
   Text,
   TouchableOpacity,
   FlatList,
   ScrollView,
   Image,
   SafeAreaView,
   ImageBackground
 } from 'react-native';
 
 import { Header } from './screens/Header';
 //create component
 export const  Home  = ({ navigation }) => { 

  return(

  <SafeAreaView>
    <ScrollView>
        <Header />

         <Categories OnPress={() => { navigation.navigate('Login'); }} /> 

         {/* Sections */}
         <HomeSection  TextRight ={'Trending'} />  
         

    </ScrollView>
  </SafeAreaView>
  )
  
 }
 export  function HomeSection({TextRight , OnPress}) {

  
  return (
    <>
      <View style={styles.homesectionHead}>
        <TouchableOpacity style={{color: 'white'}} >
          <Text>See All</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{color: 'white'}} >
          <Text>{TextRight}</Text>
        </TouchableOpacity>

      </View>

      <View style = {styles.homeSectionImages}>

      <Getproducts OnPress={OnPress} />
          
      </View>
    </>
  );
}

const Getproducts = () => {
  const [products, setProducts] = React.useState(null);
  const navigation = useNavigation();
  React.useEffect(() => {
    axios.get(`http://beka.trustits.net/api/products`).then((response) => {

      setProducts(response.data.products);
      console.log(products)
    });
  }, []);
  //console.log(products)
  return (
     <FlatList  horizontal showsHorizontalScrollIndicator   data={products}  ItemSeparatorComponent= {() => <View style={{padding: 10}} />}
          
          renderItem={ ({item}) => {
          
            return (
                <View key={item.id} style={{alignItems: 'center'}}>
                  <TouchableOpacity onPress={ () => navigation.navigate('Product' , {
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        img: item.images[0].full,
                    }) }>
                    <ImageBackground source={{uri: 'http://beka.trustits.net/storage/products/mobile_photos/' + item.images[0].full}}  style={styles.product}   > 
                      <Text style={styles.text}>{item.name}</Text>
                     </ImageBackground>
                  </TouchableOpacity>
                  
                </View>
              );
            
          }
          }
      />            
  );
}
const styles = {

  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingBottom : 20,
    flexDirection : 'column'

  },
  tinyLogo: {
      width: 50,
      height: 50,
    },
    product: {
      width : 'auto',
      height : 300,
    justifyContent: "flex-end",
    borderRadius: 50
    },
    text: {
      color: "white",
      fontSize: 12,
      lineHeight: 20,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0",
      width: 150
    },
    homesectionHead: {
    paddingVertical: 25,
    justifyContent : 'space-between' ,
    alignItems : 'center',
    flexDirection : 'row',
    paddingHorizontal : 5 ,
  },
  homeSectionImages : {
    flex : 1,
    alignItems: 'center' ,
    flexDirection : 'row' ,
    justifyContent : 'space-between',
    paddingHorizontal : 5 ,
    paddingVertical: 20,
    backgroundColor: "gold",
    }
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
