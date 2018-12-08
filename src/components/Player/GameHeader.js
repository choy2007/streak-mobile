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
      timer: 10
    }
  }
  
  componentDidMount() {
    setInterval(() => {
      if(this.state.timer>0){
        this.setState({timer: this.state.timer - 1})
      } 
    }, 1000)
  }

  // decreaseTimer(timer){
  //   x = timer;
  //   while(x>0) {
  //     this.setState({ timer: x-- })
  //   }
  // }
  
  // setTimer() {
  //   setTimeout(() => this.decreaseTimer(this.props.timer), 1000)
  // }

  render() {
    const { title, back, close }  = this.props;
    return(
      <View style={styles.container}>
        <Text style={styles.exitButtonStyle}> Exit </Text>
        <Text style={styles.questionTimer}> 0 </Text>
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