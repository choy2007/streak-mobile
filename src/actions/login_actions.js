import { Alert, AlertIOS, Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { storeData, removeData } from '../utils/storage';
import { API_KEY } from  '../config/api';

const ALERT = (Platform.OS === 'ios') ? AlertIOS : Alert;

export function sessionRequest() {
  return {
    type: 'SESSION_REQUEST'
  }
}

export function loginSuccess(user) {
  return {
    type: 'LOGIN_SUCCESS',
    payload: user,
  }
}

export function loginSuccessPlayer(status) {
  return {
    type: 'LOGIN_SUCCESS_PLAYER',
    payload: status,
  }
}

export function sessionSuccess() {
  return {
    type: 'SESSION_SUCCESS'
  }
}

export function sessionFailed() {
  return {
    type: 'SESSION_FAILED'
  }
}

export function logoutRequest() {
  return {
    type: 'USER_LOGOUT'
  }
}

export function login(state) {
  console.log("state", state)
  return dispatch => {
    dispatch(sessionRequest())
    fetch(`${API_KEY}/sessions/login`, {
      method: 'POST',
      headers: {
        'X-Access-Type': "User",
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: state.email,
        password: state.password,
      }),
    })
    .then(response => response.json())
    .then(responsejson => {
      console.log(responsejson)
      if (responsejson.status === 200) {
        dispatch(sessionRequest(responsejson));
        dispatch(loginSuccess(responsejson));

        storeData('email', state.email);
        storeData('password', state.password);

        if (responsejson.data.user.role == 'Player') {
          dispatch(NavigationActions.navigate({ routeName: 'Home' }));
        } 
      } else {
        dispatch(sessionFailed())
        ALERT.alert('Username/Password Incorrect');
      }
    })
    .catch(error => {
      dispatch(sessionFailed())
      ALERT.alert('Server error. Please contact the admin.');
      console.log(error)
    })
  }
}

export function change_password(password){
  return dispath => {

  }
}
export function logout(auth) {
  return dispatch => {
    removeData('username');
    removeData('password');
    removeData('token');
    dispatch(NavigationActions.navigate({ routeName: 'Login' }));
  }
}
