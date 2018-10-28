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
  }

  componentDidMount(){
    const auth = this.props.auth;
    
  }

  componentWillUnmount(){
    console.log('Unmount')
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