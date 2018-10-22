import { Alert, AlertIOS, Platform } from 'react-native';
import { API_KEY } from  '../config/api';
import { NavigationActions } from 'react-navigation'
 
const ALERT = (Platform.OS === 'ios') ? AlertIOS : Alert 

export function fetchGames() {
  return {
    type: 'FETCH_GAME_REQUEST'
  }
}

export function fetchGamesSuccess(games) {
  return {
    type: 'FETCH_GAME_SUCCESS',
    payload: games
  }
}

export function fetchGamesFailed() {
  return {
    type: 'FETCH_GAME_FAILED'
  }
}

export function addActiveGame(game) {
  return {
    type: 'ADD_ACTIVE_GAME',
    payload: game
  }
}

export function removeInactiveGame(game) {
  return {
    type: 'REMOVE_INACTIVE_GAME',
    payload: game
  }
}

export function updateActiveGame(game) {
  return {
    type: 'UPDATE_ACTIVE_GAME',
    payload: game
  }
}

export function fetch_games(auth) {
  return dispatch => {
    console.log(auth.user)
    dispatch(fetchGames())
    fetch(`${API_KEY}/games`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-Access-Type': "User",
        'X-Access-Token': auth.access_token
      },
    })
    .then(response => response.json())
    .then(responsejson => {
      if (responsejson.status == "unauthorized") {
        dispatch(fetchGamesFailed())
        ALERT.alert('You are not allowed to access this.');
      } else {
        dispatch(fetchGamesSuccess(responsejson))
      }
    })
    .catch(error => {
      dispatch(fetchGamesFailed())
      ALERT.alert('Server error. Please contact the admin.');
      console.log(error)
    })
  }
}

export function fetch_active_game(access_token, id) {
  return dispatch => {
    dispatch(fetchGames())
    fetch(`${API_KEY}/games/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-Access-Type': 'User',
        'X-Access-Token': access_token
      },
    })
    .then(response => response.json())
    .then(responsejson => {
      if (responsejson.status == "unauthorized") {
        dispatch(fetchGamesFailed())
        ALERT.alert('You are not allowed to access this.');
      } else {
        dispatch(updateActiveGame(responsejson))
      }
    })
    .catch(error => {
      dispatch(fetchGamesFailed())
      ALERT.alert('Server error. Please contact the admin.');
      console.log(error)
    })
  }
}
