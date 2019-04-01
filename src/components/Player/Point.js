import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../styles/point';
import Loading from '../../components/Loading';

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
    console.log(`GAME USER SCORE IS`, game.score);
    if(game.isFetching){
      return <Loading />
    }
    return (
      <View style={styles.container}>
        { game.score && game.score === "You got it right, first! 2 POINTS"
          ?
            <View style={styles.pointContainer}>
              <Image source={require('../../img/check-mark.png')} style={styles.logoStyle} resizeMode='contain'/>
              <Text style={styles.titleText}>
                {game.score}
              </Text>
            </View>
          : game.score && game.score === "Your answer is correct! 1 POINT" 
          ?
            <View style={styles.pointContainer}>
              <Image source={require('../../img/check-mark.png')} style={styles.logoStyle} resizeMode='contain'/>
              <Text style={styles.titleText}>
                {game.score}
              </Text>
            </View>
          : game.score && game.score === "Incorrect answer! 0 POINT" 
          ?
            <View style={styles.pointContainer}>
              <Image source={require('../../img/x-mark.png')} style={styles.logoStyle} resizeMode='contain'/>
              <Text style={styles.titleText}>
                Wrong Answer! 0 POINT
              </Text>
            </View>
          : game.score && game.score.length == 0 && game.isFetching
          ?
            <View style={styles.pointContainer}>
              <Image source={require('../../img/x-mark.png')} style={styles.logoStyle} resizeMode='contain'/>
              <Text style={styles.titleText}>
                Wrong Answer! 0 POINT
              </Text>
            </View>
          :
          <Text>
          </Text>
        } 
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