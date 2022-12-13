/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 
 */
import React , {Component} from 'react';
import {Card , CardItem} from './common'
import {Text, StyleSheet, TextInput,View} from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from './actions';

 //store
const reducer = () => "hello" ;
//const store = Redux.createStore(reducer) ;

 //create component
 class  LoginForm extends Component {
constructor(){
  super();

  //state 
  this.state = {
    username : '' ,
    password : ''
  }
}
UNSAFE_componentWillReceiveProps (nextProps) {
  console.log(nextProps)
  if (nextProps.user) {
    this.props.navigation.navigate('Home');
  }
}
//methods
_onLoginpressed() {
const {username , password} = this.state ;
this.props.loginUser({username , password})
}
_renderButton(){
  console.log(this.props.loading);
if(this.props.loading)
  {
    return (     
      <Button isLoading></Button>
    )
  }
return(
  <>
  
    <Text>{this.props.error}</Text>
    <Button size={'lg'} 
    colorScheme="secondary"
    onPress={() =>
    this._onLoginpressed()
    }
    >Login
    </Button> 
  
  </>

)
 
}


//render
    render(){
      return (
        <Text>Hello</Text>
      
      );
    }
        
    
   
 }
 
 const styles = StyleSheet.create({
  header: {
    backgroundColor: '#efefef' ,
    height : 80 ,
    alignItems : 'center' ,
    justifyContent: 'center',
  },
  text :{
    fontWeight : 'bold' ,
    fontSize : 25 ,
  }
 });


const mapStateToProps = state => {

  return {

    error : state.auth.error,
    loading : state.auth.loading,
    user : state.auth.user,
  }
}
 export default LoginForm;