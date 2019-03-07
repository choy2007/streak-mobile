import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../styles/ready';

import { ACTION_CABLE_URL } from '../../config/api';
import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';

import * as gameActions from '../../actions/game_actions';

import { NavigationActions } from 'react-navigation';
  
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Ready extends Component {
  constructor(){
    super();

    this.state = {
      timer: 5
    }
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     if(this.state.timer>0){
  //       this.setState({timer: this.state.timer - 1})
  //     } else {
  //       this.props.game_actions.update_type('game');
  //     }
  //   }, 1000)
  // }

  render() {
    const { game } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.readyContainer}>
        <Image source={require('../../img/ready.png')} style={styles.readyLogo}/>
          <Text style={styles.titleText}>
            Question
          </Text>
          <Text style={styles.readyText}>
            Ready!
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

export default connect (mapStateToProps, mapDispatchToProps)(Ready);