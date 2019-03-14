import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/game-header';

import { ACTION_CABLE_URL } from '../../config/api';
import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';
import { NavigationActions } from 'react-navigation';
import ExitButton from './ExitButton';

import * as gameActions from '../../actions/game_actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class GameHeader extends Component{
  constructor(props){
    super(props);

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
              clearInterval(setIntervalTimer);
            }
          }, 1000)
        this.setState({ timer: this.getTimer(), type: 'game', setIntervalTimer: null})
      } else if (this.state.timer === 0 && this.state.type === 'game'){
        this.setState({ timer: 0 })
        this.props.game_actions.update_type('point')
        this.setState({ type: 'ready', setIntervalTimer: null })
      }
    }
  }

  componentWillUnmount() {
    this._mounted = false;
    clearInterval(this.state.setIntervalTimer);
  }

  
  getView(){
    const { game } = this.props;
    switch(game.type){
      case 'ready':
        return (
          <View style={styles.timerContainer}>
          <Text style={styles.questionTimer}> READY </Text>
          </View>
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
          <View style={styles.timerContainer}>
          <Text style={styles.questionTimer}> {this.state.timer} </Text>
          </View>
        );
      case 'point':
        return (
          <View style={styles.timerContainer}>
          <Text style={styles.questionTimer}> POINT </Text>
          </View>
        );
    }
  }

  render() {
    const { title, back, close, navigate }  = this.props;
    return(
      <View style={styles.container}>
        <ExitButton navigate={navigate} styles={styles.exitButtonStyle}/>
        <View style={styles.timerContainer}>
          <Text style={styles.questionTimer}> 
            {this.state.timer? this.state.timer : "0" }
          </Text>
        </View>
        <View style={styles.scoreContainer}>
          <Text style={styles.subText}>
            SCORE
          </Text>
          <Text style={styles.currentScore}> 
            {this.props.score ? this.props.score : "0"}
          </Text>
        </View>
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