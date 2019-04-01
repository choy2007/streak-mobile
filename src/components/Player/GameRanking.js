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

  getRankingUsers(){
    const { game } = this.props;
    console.log(game)
    return game.ranking.map(player => {
      return(
          <View style={styles.userContainer} key={player.user}>  
            <Text style={styles.userText} key={player.user} > {player} </Text>
          </View>
        )
    })
  }

  getRankingScores(){
    const { game } = this.props;
    console.log(game)
    return game.ranking_score.map(score => {
      return(
        <View style={styles.scoreContainer} key={score.score}>
          <Text style={styles.pointText} key={score.score} > {score} </Text>
        </View>
      )
    })
  }

  render(){
    const { game } = this.props;
    if(game.isFetching == false){
      return <Loading />
    }
    return(
      <View style={styles.container}>
        <View>
          { this.getRankingUsers() }
        </View>
        <View>
          { this.getRankingScores() }
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

export default connect (mapStateToProps, mapDispatchToProps)(GameRanking);