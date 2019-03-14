import React, { Component } from 'react';
import { View, Text, Image, ListItem } from 'react-native';
import styles from '../../styles/game-ranking';

import { ACTION_CABLE_URL } from '../../config/api';
import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';

import * as gameActions from '../../actions/game_actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class GameRanking extends Component {
  constructor(){
    super();

    this.state = {
      test: [{
        user: "choy",
        score: "10"
      },
      {
        user: "jasper",
        score: "9"
      },
      {
        user: "pat",
        score: "8"
      },
      {
        user: "almikka",
        score: "7"
      },
      {
        user: "odette",
        score: "6"
      }]
    }
  }

  componentDidMount() {
    this._mounted = true;
    const { game, auth, game_actions } = this.props;
    this.props.game_actions.fetch_game_ranking(game.activeGame[0].id);
  }

  componentWillUnmount(){
    this._mounted = false;
  }

  render() {
    const { game } = this.props;
    console.log(game)
    return this.state.test.map(player => {
      return(
        <View style={styles.container}>
          {/* <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Game Ranking
            </Text>
          </View> */}
          <View style={styles.playerContainer}>  
            <View style={styles.pointsContainer}>  
              <Text key={player.user} style={styles.playerScore}> {player.score}</Text>
              <Text style={styles.subText}>
                POINTS
              </Text>
            </View> 
            <View style={styles.nameContainer} >
              <Text key={player.user} style={styles.playerName}> {player.user}</Text>
            </View>
          </View>
        </View>
        )
    })
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

export default connect (mapStateToProps, mapDispatchToProps)(GameRanking);