import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground, Alert } from 'react-native';
import styles from '../../styles/home';

import GameBackground from '../../components/Player/GameBackground';
import GameHeader from '../../components/Player/GameHeader';
import GamePrize from '../../components/Player/Prize';
import PlayerReady from '../../components/Player/Ready';
import PlayerQuestion from '../../components/Player/Question';
import PlayerPoint from '../../components/Player/Point';
import GameRanking from '../../components/Player/GameRanking';

import vars from '../../styles/variables'

import * as gameActions from '../../actions/game_actions';

import { ACTION_CABLE_URL } from '../../config/api';
import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class GameScreen extends Component{
  constructor(){
    super();

    this.state = {
      question: '',
      answer: '',
    }

    this.cable = RNActionCable.createConsumer(`${ACTION_CABLE_URL}`)
  }

  getView(){
    const { game } = this.props;
    switch(game.type){
      case 'ready':
        return <PlayerReady />
      case 'game':
        return <PlayerQuestion game={game}/>
      case 'point':
        return <PlayerPoint />
      case 'ranking':
        return <GameRanking />
    }
  }

  componentDidMount(){
    const { game, auth } = this.props;
    this.props.game_actions.fetch_question(game.activeGame[0].id)
    console.log(`GAME QUESTION STATE`, game, auth)
  }


  render(){
    const { game, auth, navigation: { navigate } } = this.props;
    return(
      <View style={styles.container}>
        <GameHeader timer={game.questions && game.questions[0] && game.questions[0].timer}/>
        <GameBackground>
          { this.getView() }
        </GameBackground>
      </View>
    )
  }
}

function mapStateToProps(state){
  console.log(`STATE IS`, state)
  return{
    auth: state.auth,
    game: state.game
  }
}

function mapDispatchToProps(dispatch){
  return{
    game_actions: bindActionCreators(gameActions, dispatch),
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(GameScreen);