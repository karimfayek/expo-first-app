/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 
 */

 import axios from 'axios';
import React , {Component} from 'react';
import Categories from './screens/Categories';
import { useState } from 'react';

 import {
   StyleSheet,
   View,
   Text,
   TouchableOpacity,
   FlatList,
   ScrollView,
   Image,
   SafeAreaView
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
 export  function HomeSection({TextRight}) {

  
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

         <Getproducts />

          
      </View>
    </>
  );
}

export  function Getproducts() {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/products?limit=10`).then((response) => {

      setProducts(response.data);
    });
  }, []);
  if (!products) return null;


  return (
     <FlatList  horizontal showsHorizontalScrollIndicator   data={products}  ItemSeparatorComponent= {() => <View style={{padding: 10}} />}
                  renderItem=
                  { ({item}) =>{
                    const image = item.image;
                    
  if (!item) return null;
                    return(
                      <TouchableOpacity key = {item.id}>
                              <Image  style={styles.product} source={{uri: image}}/> 
                              <Text style={{ width:150}}>{item.title}</Text>
                              </TouchableOpacity>  
                       )
                     }
                  }
            />            
  );
}
export class Getproductss extends React.Component {
  constructor(){

  }
  state = {
    products: []
  };
  
  componentDidMount() {
    axios.get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=2`)
      .then(res => {
        const products =  res.data; 
        this.setState({ products }); 
      })
  };
render(){
  return (
    
    this.state.products.map(product => {
      <>

<Image source={{uri : product.images}} /> 
      <Text>{ product.category.name}</Text>
      </>
    })
  )
}

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
      width: 150,
      height: 300,
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
