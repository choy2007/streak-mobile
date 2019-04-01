import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground,Dimensions, Alert } from 'react-native';
import styles from '../../styles/game';
import vars from '../../styles/variables'
import * as gameActions from '../../actions/game_actions';

import { ACTION_CABLE_URL } from '../../config/api';
import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
var DEVICE_WIDTH = Dimensions.get('window').width;
var DEVICE_HEIGHT = Dimensions.get('window').height;

class PlayerQuestion extends Component {
  constructor(){
    super();

    this.state = {
      choices: '',
      timer: null,
      disabled: false,
    }
  }

  getTimer(){
    const { game } = this.props;
    return game.questions.find(question => question.active === true).timer
  }

  componentDidMount(){
    const { game, auth, game_actions } = this.props;
    this._mounted = true
  }


  _answerQuestion(){
    const { game, auth, game_actions } = this.props;
  }


  componentWillUnmount(){
    const { game, auth } = this.props;
    this._mounted = false;   
  }


  getChoices() {
    const { game, auth, game_actions } = this.props;
      return game.questions.find(question => question.active === true).choices.map((choice, key) => {
        return (
          <TouchableOpacity disabled={this.state.disabled} 
            onPress={() => { 
              game_actions.answerQuestion(choice, game.questions.find(question => question.active === true).id, auth.user.user.id);
              this.setState({["styleCounter_" + key]: 1});
              this.setState({disabled: true});
            } 
          } key={choice}>
            {choice != ''? <View key={key} style={
              (this.state.hasOwnProperty("styleCounter_" + key)) ? styles.listContainer2 : styles.listContainer1
            }>
              <Text style={styles.listTitle}>{choice}</Text>
            </View>:null}
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