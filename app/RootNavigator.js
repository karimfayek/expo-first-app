
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Login from './Login';
import DrawerItems from './common/constants/DrawerItems';

import {
    StyleSheet,
    Text,
    Button,
  } from 'react-native';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
const  RootNavigator = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name="Login" component={Login} 
               options = {{ headerBackTitle : 'back' }}  />

                <Stack.Screen
                name="Home"  component={Home}
                options=
                {{                    
                    title: 'Home' ,
                    headerBackButtonMenuEnabled : false,
                    headerBackVisible : true,
                    headerBackTitle : 'back'
                }}
                />

            </Stack.Navigator>
           
        </NavigationContainer>


    );


}
export default RootNavigator;
