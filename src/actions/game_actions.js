import { Alert, AlertIOS, Platform } from 'react-native';
import { API_KEY } from  '../config/api';
import { NavigationActions } from 'react-navigation';

var PushNotification = require('react-native-push-notification');
 
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

export function fetchActiveGame(game) {
  return {
    type: 'FETCH_ACTIVE_GAME',
    payload: game
  }
}

export function fetchQuestion(game) {
  return {
    type: 'FETCH_QUESTION',
    payload: game
  }
}

export function fetchScore(score){
  return {
    type: 'FETCH_SCORE',
    payload: score
  }
}

export function fetchScoreSuccess(score){
  return {
    type: 'FETCH_SCORE_SUCCESS',
    payload: score
  }
}

export function fetchUserScore(user_score){
  return {
    type: 'FETCH_USER_SCORE',
    payload: user_score
  }
}

export function fetchGameRanking(ranking){
  return {
    type: 'FETCH_GAME_RANKING',
    payload: ranking
  }
}

export function fetchGameRankingSuccess(ranking){
  return {
    type: 'FETCH_GAME_RANKING_SUCCESS',
    payload: ranking
  }
}

export function fetchLeaderboards(leaderboards){
  return {
    type: 'FETCH_LEADERBOARDS',
    payload: leaderboards
  }
}

export function update_type(type) {
  return {
    type: 'UPDATE_TYPE',
    payload: type
  }
}


export function fetch_question(game_id){
  return dispatch => {
    console.log(`GAME ID`, game_id)
    fetch(`${API_KEY}/games/${game_id}`,{
      method: 'GET',
      header: {
        Accept: 'application/json',
        'X-Access-Type': "User",
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(responsejson => {
      console.log(`responsejson`, responsejson)
      if (responsejson.status === 200) {
        dispatch(fetchQuestion(responsejson.data))
      } else {
        ALERT.alert('You are not allowed to access this.');
      }
    })
  }
}

export function userJoin(auth, game_id) {
  return dispatch => {
    console.log(auth.user.user.id, game_id)
    fetch(`${API_KEY}/games_users`,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: auth.user.user.id,
        game_id: game_id,
      })
    })
    .then(response => response.json())

  }
}

export function answerQuestion(choice, question_id, user_id) {
  return dispatch => {
    fetch(`${API_KEY}/questions/answer`,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        answer: choice,
        user_id: user_id,
        question_id: question_id,
      })
    })
    .then(response => response.json())
  }
}

export function fetch_score(user_id, question_id){
  return dispatch => {
    fetch(`${API_KEY}/scores/?user_id=${user_id}&question_id=${question_id}`,{
      method: 'GET',
      header: {
        Accept: 'application/json',
        'X-Access-Type': "User",
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(responsejson => {
      console.log(`responsejson`, responsejson)
      if (responsejson.status === 200) {
        dispatch(fetchScore(responsejson.message))
        dispatch(fetchScoreSuccess(responsejson.message))
      } else {
        ALERT.alert('You are not allowed to access this.');
      }
    })
  }
}

export function fetch_game_ranking(game_id){
  return dispatch => {
    fetch(`${API_KEY}/games_users?game_id=${game_id}`, {
      method: 'GET',
      header: {
        Accept: 'application/json',
        'X-Access-Type': "User",
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(responsejson => {
      if (responsejson.status === 200){
        dispatch(fetchGameRanking(responsejson.data))
        dispatch(fetchGameRankingSuccess(responsejson.data))
      } else {
        
      }
    })
  }
}

export function fetch_user_score(game_id, user_id){
  return dispatch => {
    fetch(`${API_KEY}/games_user/score?user_id=${user_id}&game_id=${game_id}`, {
      method: 'GET',
      header: {
        Accept: 'application/json',
        'X-Access-Type': "User",
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(responsejson => {
      if(responsejson.status === 200){
        dispatch(fetchUserScore(responsejson.data))
      } else {
        ALERT.alert('You are not allowed to access this.');
      }
    })
  }
}

export function fetch_games(auth) {
  return dispatch => {
    dispatch(fetchGames())
    fetch(`${API_KEY}/games`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-Access-Type': "User",
        'X-Access-Token': auth.token
      },
    })
    .then(response => response.json())
    .then(responsejson => {
      if (responsejson.status === 200) {
        dispatch(fetchGamesSuccess(responsejson))
      } else {
        dispatch(fetchGamesFailed())
        ALERT.alert('You are not allowed to access this.');
      }
    })
    .catch(error => {
      dispatch(fetchGamesFailed())
      ALERT.alert('Server error. Please contact the admin.');
      console.log(error)
    })
  }
}

export function fetch_active_game(token, id) {
  return dispatch => {
    dispatch(fetchGames())
    fetch(`${API_KEY}/games`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-Access-Type': 'User',
        'X-Access-Token': token
      },
    })
    .then(response => response.json())
    .then(responsejson => {
      if (responsejson.status == "unauthorized") {
        dispatch(fetchGamesFailed())
        ALERT.alert('You are not allowed to access this.');
      } else {
        dispatch(fetchActiveGame(responsejson))
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

export function fetch_leaderboards(token, id) {
  return dispatch => {
    dispatch(fetchGames())
    fetch(`${API_KEY}/leaderboards`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-Access-Type': 'User',
        'X-Access-Token': token
      },
    })
    .then(response => response.json())
    .then(responsejson => {
      if (responsejson.status == "unauthorized") {
        ALERT.alert('You are not allowed to access this.');
      } else {
        dispatch(fetchLeaderboards(responsejson.data))
      }
    })
    .catch(error => {
      ALERT.alert('Server error. Please contact the admin.');
      console.log(error)
    })
  }
}

