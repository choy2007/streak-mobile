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
      point: ""
    }
  }

  componentDidMount() {
    this._mounted = true;
    const { game, auth, game_actions } = this.props;
    this.props.game_actions.fetch_score(auth.user.user.id, this.getQuestionId());
  }

  getQuestionId(){
    const { game } = this.props;
    return game.questions.find(question => question.active === true).id 
  }

  componentWillUnmount() {
    this._mounted = false;
  }
  render() {
    const { game, auth } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.readyContainer}>
          <Text style={styles.titleText}>
            { game.score } SCORE
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

export default connect (mapStateToProps, mapDispatchToProps)(Point);