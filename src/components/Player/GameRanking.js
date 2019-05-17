import React, { Component } from 'react';
import { View, Text, Image, ListItem } from 'react-native';
import styles from '../../styles/game-ranking';
import Loading from '../../components/Loading';

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
    this.props.game_actions.fetch_game_ranking(game.activeGame[0].id) || {};
  }

  componentWillUnmount(){
    this._mounted = false;
  }

  getRankingScores(){
    const { game } = this.props;
    console.log(game)
    return game.ranking_score.map(score => {
      return(
        <View key={score.score}>
          <Text key={score.score} style={styles.playerScore}> {score} </Text>
        </View>
      )
    })
  }

  getRankingUsers(){
    const { game } = this.props;
    console.log(game)
    return game.ranking.map(player => {
      return(
          <View key={player.user}>
            <Text style={styles.playerName} key={player.user}>{player.substr(0,player.indexOf(' '))} </Text>
          </View>
        )
    })
  }

  render(){
    const { game } = this.props;
    if(game.isFetching == false){
      return <Loading/>
    }
    return(
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Game Ranking
          </Text>
        </View>
        <Text />
        <View style={styles.rankingContainer}>
          <View style={styles.pointsContainer}>
            { this.getRankingScores() }
          </View>
          <View style={styles.userContainer}>
            { this.getRankingUsers() }
          </View>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state){
  console.log(`STATE IS`, state);
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