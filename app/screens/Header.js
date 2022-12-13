


import React  from 'react';
import {Text, View, Image} from 'react-native';
export  function Header() {
    return (

        <View style={{
            justifyContent : 'space-between',
            flexDirection : 'row',
            height : 50 ,
            padding : 5,
            alignItems :'center',
            marginTop : 30,
            marginBottom : 10
        }}>
            <Image 
      style={styles.tinyLogo}
      source= {{uri: 'http://beka.trustits.net/storage/products/mobile_photos/RdpIqYxTPcenGxDRkW6kSA11v54QHMUhYsuTgig3.webp'}}
    />
            <Text>Login</Text>
        </View>
    )
    }
    const styles = {

        
        tinyLogo: {
            width: 50,
            height: 50,
          },
        }