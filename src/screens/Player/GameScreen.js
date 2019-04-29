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
import TopScorer from '../../components/Player/TopScorer';
import Loading from '../../components/Loading';


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
      score: null,

    }

    this.cable = RNActionCable.createConsumer(`${ACTION_CABLE_URL}`);
    this._handleReceivedCable = this._handleReceivedCable.bind(this)
    this._handleGameStart = this._handleGameStart.bind(this)
  }

  componentDidMount(){
    const auth = this.props.auth;
    const { game } = this.props;
    this.props.game_actions.fetch_question(game.activeGame[0].id)
    this._handleGameStart();
  }

  getScore(){
    const { game, auth } = this.props;
    this.props.game_actions.fetch_user_score(game.activeGame[0].id, auth.user.user.id);
    console.log(`USER SCORE IS`, game)
    return game.user_score
  }

  _handleGameStart() {
    const { game } = this.props;
    this.subscription = this.cable.subscriptions.create('GameRoomChannel',
    {
      received: (data) => this._handleReceivedCable(data.game),
    })
  }

  _handleReceivedCable(game) {
    const { auth, navigation: { navigate } } = this.props;
    if (game.status == "Ready"){
      this.props.game_actions.update_type('ready');
    }
    if (game.status == "Ingame") {
      this.props.game_actions.update_type('game');
    }
    if (game.status == "Ranking"){
      this.props.game_actions.update_type('ranking');
      this.props.game_actions.fetch_user_score(game.id, auth.user.user.id);
      console.log(`USER SCORE IS`, this.props.game.user_score);
    }
    if (game.status == "Done"){
      this.props.game_actions.update_type('top_scorer');
    }
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
      case 'top_scorer':
        return <TopScorer />
    }
  }


  render(){
    const { game, auth, navigation: { navigate } } = this.props;
    console.log(`USER SC0RE`, this.props.game && this.props.game.user_score);
    return(
      <View style={styles.container}>
        <GameHeader subscription={this.subscription} navigate={navigate} score={this.props.game && this.props.game.user_score ? this.props.game.user_score : "0"} />
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