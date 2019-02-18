import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../styles/point';

import { ACTION_CABLE_URL } from '../../config/api';
import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';

import * as gameActions from '../../actions/game_actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class GameRanking extends Component {
  constructor(){
    super();

    this.state = {
      timer: 10
    }
  }

  componentDidMount() {
    this._mounted = true;
    // setInterval(() => {
    //   if(this.state.timer>0){
    //     this.setState({timer: this.state.timer - 1})
    //   } else {
    //     this.props.game_actions.update_type('ready');
    //   }
    // }, 1000)
  }

  componentWillUnmount(){
    this._mounted = false;
  }

  render() {
    return (
      <Text> GAME RANKING </Text>
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

export default connect (mapStateToProps, mapDispatchToProps)(GameRanking);