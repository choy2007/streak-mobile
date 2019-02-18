import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../styles/point';

import { ACTION_CABLE_URL } from '../../config/api';
import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';

import * as gameActions from '../../actions/game_actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Point extends Component {
  constructor(){
    super();

    this.state = {
      timer: 5
    }
  }

  componentDidMount() {
    this._mounted = true;
    let interval = setInterval(() => {
      if(this.state.timer>0){
        this.setState({timer: this.state.timer - 1})
      } else {
        this.props.game_actions.update_type('ranking');
      }
    }, 1000)
  }

  componentWillUnmount() {
    this._mounted = false;
    clearInterval(this.state.interval)
  }
  render() {
    return (
      <Text> POINT COMPONENT </Text>
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

export default connect (mapStateToProps, mapDispatchToProps)(Point);