import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './types';

import { AsyncStorage } from 'react-native';
import axios from 'axios';


const onLoginSuccess = (dispatch, user, token) => {

  AsyncStorage.setItem('app_token',token)
    .then(() => {
      dispatch({ type: LOGIN_SUCCESS, user })
    });
};

const onLoginFailed = (dispatch, errorMessage) => {
  dispatch({ type: LOGIN_FAILED, error: errorMessage})
};


const handleResponse = (dispatch, data) => {
  if (!data.success) {
    onLoginFailed(dispatch, data.message);
    
  }else {
    onLoginSuccess(dispatch, data.user, data.token)
  }
}

export const loginUser = ({ username, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_ATTEMPT });

    //Call the back-end API
    //Please do not spam/abuse it so others can use it as well.
    //onLoginFailed(dispatch, "error 404");
    axios.get('http://beka.trustits.net/vue/contact/get-values',
    { email: username, password })
      .then(resp => 
        handleResponse(dispatch, resp.data),
       // console.log(resp),
        //dispatch({ type: LOGIN_SUCCESS, 'kimo' })
        )
      .catch(error => console.error(error));

  };
}