import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground, Alert } from 'react-native';
import styles from '../../styles/game';
import vars from '../../styles/variables'
import * as gameActions from '../../actions/game_actions';

import { ACTION_CABLE_URL } from '../../config/api';
import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PlayerQuestion extends Component {
  constructor(){
    super();

    this.state = {
      choices: '',
      timer: null,
      disabled: false
    }
  }

  getTimer(){
    const { game } = this.props;
    return game.questions.find(question => question.active === true).timer 
  }

  componentDidMount(){
    this._mounted = true;
    // this.setState({timer: this.getTimer()})
    // let interval = setInterval(() => {
    //   if(this.state.timer>0){
    //     this.setState({timer: this.state.timer - 1})
    //   } else {
    //     this.props.game_actions.update_type('point');
    //   }
    // }, 1000)
  }

  componentWillUnmount(){
    this._mounted = false;
    clearInterval(this.state.interval)
  }

  getChoices() {
    const { game, auth, game_actions } = this.props;
      return game.questions.find(question => question.active === true).choices.map(choice => {
          return (
            <TouchableOpacity onPress={() => game_actions.answerQuestion(choice, game.questions.find(question => question.active === true).id, auth.user.user.id)} key={choice}>
              <View style={styles.listContainer1}>
                <Text style={styles.listTitle}>{choice}</Text>
              </View>
            </TouchableOpacity>
          )
        })
  }
  
  render() {
    const { game: { questions } }  = this.props;
    return(
      <View style={styles.container}>
        <View style={styles.choiceContainer}>
          { this.getChoices() }
        </View>
        
      </View>
    )
  }
}

function mapStateToProps(state){
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

export default connect (mapStateToProps, mapDispatchToProps)(PlayerQuestion);