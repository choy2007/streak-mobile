import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground, Alert } from 'react-native';
import styles from '../../styles/home';
import PlayerQuestion from '../../components/Player/Question';
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

  componentDidMount(){
    const { game, auth } = this.props;
    this.props.game_actions.fetch_question(game.activeGame[0].id)
    console.log(`GAME QUESTION STATE`, game, auth)
  }

  render(){
    const { game, auth, navigation: { navigate } } = this.props;
    return(
      <View style={styles.container}>
        <PlayerQuestion />
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