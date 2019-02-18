import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/game-header';

import { ACTION_CABLE_URL } from '../../config/api';
import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';

import * as gameActions from '../../actions/game_actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class GameHeader extends Component{
  constructor(){
    super();

    this.state = {
      timer: null,
      type: 'ready',
      setIntervalTimer: null,
    }
  }

  getTimer(){
    const { game } = this.props;
    return game.questions.find(question => question.active === true).timer 
  }

  componentDidUpdate(){
    this._mounted = true;
    if (this.props.game.type === 'game') {
      if (this.state.type !== 'game') {
        let setIntervalTimer = setInterval(() => {
            if(this.state.timer>0){
              console.log(`this state timer`, this.state.timer)
              this.setState({timer: this.state.timer - 1})
            } else {
              clearInterval(this.state.setInterval)
              this.setState({ type: 'point', setIntervalTimer: null })
            }
          }, 1000)
        this.setState({ timer: this.getTimer(), type: 'game', setIntervalTimer: null})
      } else if (this.state.timer === 0 && this.state.type === 'game'){
        clearInterval(this.state.setInterval)
        this.setState({ type: 'ready', setIntervalTimer: null })
      }
    }
  }

  componentWillUnmount() {
    this._mounted = false;
    clearInterval(this.state.setInterval)
  }
  
  getView(){
    const { game } = this.props;
    switch(game.type){
      case 'ready':
        return (
          <Text style={styles.questionTimer}> READY </Text>
        );
      case 'game':
        console.log(`game state is `, game.type)
        let setIntervalTimer = setInterval(() => {
            if(this.state.timer>0){
              console.log(`this state timer`, this.state.timer)
              this.setState({timer: this.state.timer - 1})
            }
          }, 1000)
          this.setState({timer: this.getTimer(), type: 'game', setInterval: null})
        return (
          <Text style={styles.questionTimer}> {this.state.timer} </Text>
        );
      case 'point':
        return (
          <Text style={styles.questionTimer}> POINT </Text>
        );
    }
  }

  render() {
    const { title, back, close }  = this.props;
    return(
      <View style={styles.container}>
        <Text style={styles.exitButtonStyle}> Exit </Text>
        <Text style={styles.questionTimer}> 
          {this.state.timer? this.state.timer : "READY" }
        </Text>
        <Text style={styles.currentScore}> Score </Text>
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

export default connect (mapStateToProps, mapDispatchToProps)(GameHeader);