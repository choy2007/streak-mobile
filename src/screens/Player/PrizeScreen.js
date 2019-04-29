import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground, Alert } from 'react-native';
import styles from '../../styles/prize';
import PlayerHeader from '../../components/Player/Header';
import AnimatedEllipsis from 'react-native-animated-ellipsis';

import GameBackground from '../../components/Player/GameBackground';
import * as gameActions from '../../actions/game_actions';

import { NavigationActions } from 'react-navigation';

import { ACTION_CABLE_URL } from '../../config/api';
import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';
  
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PrizeScreen extends Component{
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
    const { game } = this.props;
    this.subscription = this.cable.subscriptions.create('GameRoomChannel',
    {
      received: (data) => this._handleReceivedCable(data.game),
    })
  }

  _handleReceivedCable(game) {
    const { auth, navigation: { navigate } } = this.props;
    if (game.status == "Ready") {
      navigate('Game');
    }
    console.log(`GAME STATUS CABLE IS`, game)
  }

  render(){
    const { game } = this.props;
    console.log(`GAME STATUS IS`, game)
    return(
      <GameBackground>
        <View style={styles.container}>
          <View style={styles.prizeContainer}>
            <Image source={require('../../img/trophy.png')} resizeMode='contain' style={styles.prizeLogo}/>
              <Text style={styles.titleText}>
                Today's Prize
              </Text>
              <Text style={styles.prizeText}>
                {game.activeGame && game.activeGame[0] && game.activeGame[0].prize}
              </Text>
          </View>
        </View>
      </GameBackground>
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

export default connect (mapStateToProps, mapDispatchToProps)(PrizeScreen);