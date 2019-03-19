import React, { Component } from 'react';
import { View, Text, Image, ListItem } from 'react-native';
import styles from '../../styles/top-scorer';

import { ACTION_CABLE_URL } from '../../config/api';
import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';

import * as gameActions from '../../actions/game_actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TopScorer extends Component {
  constructor(){
    super();

    this.state = {
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
    return game.ranking.map(player => {
      return(
          // <Text key={player.user} style={styles.playerName} > {player.user}</Text>
          // <Text key={player.user} style={styles.playerScore} > {player.score}</Text>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.topStyle}>
              <Text key={player.user} style={styles.playerName}>{player.user}</Text>  
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.playerName}>Rank 2</Text>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.playerName}>Rank 3</Text>
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

export default connect (mapStateToProps, mapDispatchToProps)(TopScorer);