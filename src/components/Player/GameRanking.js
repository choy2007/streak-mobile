import React, { Component } from 'react';
import { View, Text, Image, ListItem } from 'react-native';
import styles from '../../styles/point';

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
    return game.ranking.map((player, key) => {
      return(
          <View style={styles.container}>
            { key == 0
            ? 
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Text> {player.user} </Text>
              </View>
            </View>
            : key == 1 ?
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text> {player.user} </Text>
                </View>
              </View>
            : key == 2 ?
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text> {player.user} </Text>
                </View>
              </View>
            : key == 3 ?
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text> {player.user} </Text>
                </View>
              </View>
            : 
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text> {player.user} </Text>
                </View>
              </View>
            }
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