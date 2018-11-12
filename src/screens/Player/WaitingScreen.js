import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground, Alert } from 'react-native';
import styles from '../../styles/waiting';
import PlayerHeader from '../../components/Player/Header';
import AnimatedEllipsis from 'react-native-animated-ellipsis';

import MainBackground from '../../components/Player/MainBackground';
import * as gameActions from '../../actions/game_actions';

import { NavigationActions } from 'react-navigation';

import { ACTION_CABLE_URL } from '../../config/api';
import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class WaitingScreen extends Component{
  constructor(){
    super();

    this.state = {

    }
    this.cable = RNActionCable.createConsumer(`${ACTION_CABLE_URL}`)
    this._handleReceivedCable = this._handleReceivedCable.bind(this)
    this._handleGameStart = this._handleGameStart.bind(this)
  }

  componentDidMount(){
    const auth = this.props.auth;
    this._handleGameStart();
  }

  _handleGameStart() {
    this.subscription = this.cable.subscriptions.create('GameRoomChannel', {
      received: (data) => this._handleReceivedCable(data.game),
    })
  }

  _handleReceivedCable(game) {
    const { auth, navigation: { navigate } } = this.props;
    if (game.status == "Ingame") {
      navigate('Game');
    } 
    console.log(`GAME STATUS CABLE IS`, game)
  }

  render(){
    return(
      <MainBackground>
        <View style={styles.container}>
          <Text style={styles.waitingTitle}> 
            Waiting for Players 
            <AnimatedEllipsis style={{color: 'white'}} />
          </Text>
        </View>
      </MainBackground>
    )
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth,
    game: state.game
  }
}

function mapDispatchToProps(dispatch) {
  return {
    game_actions: bindActionCreators(gameActions, dispatch)
  }
}


export default connect (mapStateToProps, mapDispatchToProps)(WaitingScreen);