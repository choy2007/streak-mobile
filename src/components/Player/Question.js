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
    }
  }

  getChoices() {
    const { game: { questions } , auth, game_actions } = this.props;
    if (questions[0]){
      return questions[0].choices.map(choice => {
        return (
          <TouchableOpacity onPress={() => game_actions.answerQuestion(choice, questions[0].id, auth.user.user.id)} key={choice}>
            <View style={styles.listContainer1}>
              <Text style={styles.listTitle}>{choice}</Text>
            </View>
          </TouchableOpacity>
        )
      })
    }
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
    //game: state.game
  }
}

function mapDispatchToProps(dispatch){
  return{
    game_actions: bindActionCreators(gameActions, dispatch),
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(PlayerQuestion);