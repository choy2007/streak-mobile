import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground, Alert } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import styles from '../../styles/leaderboards';
// import styles from '../../styles/game-ranking';
import PlayerHeader from '../../components/Player/Header';
import vars from '../../styles/variables'
import Loading from '../../components/Loading';

import * as gameActions from '../../actions/game_actions';

import { ACTION_CABLE_URL } from '../../config/api';
import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LeaderboardsScreen extends Component{
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image source={require('../../img/f-leaderboards.png')} style={{tintColor}} />
    )
  }

  constructor(){
    super();

    this.state = {
      connected: false,
    }
  }

  componentDidMount(){
    const auth = this.props.auth;
    this.props.game_actions.fetch_leaderboards(auth);
  }

  styleRank = (rank) => {
    if (rank + 1 === 1) {
      return {
        flex: 0.09,
        backgroundColor: '#FEC100',
        justifyContent: 'center'
      };
    } else if (rank + 1=== 2) {
      return {
        flex: 0.09,
        backgroundColor: '#b3b1b0',
        justifyContent: 'center'
      };
    } else if (rank + 1=== 3) {
      return {
        flex: 0.09,
        backgroundColor: '#b3b1b0',
        justifyContent: 'center'
      };
    } else if (rank + 1=== 4) {
      return {
        flex: 0.09,
        backgroundColor: '#b3b1b0',
        justifyContent: 'center'
      };
    } else if (rank + 1 === 5) {
      return {
        flex: 0.09,
        backgroundColor: '#b3b1b0',
        justifyContent: 'center'
      };
    } else {
      return {
        flex: 0.09,
        backgroundColor: '#b3b1b0',
        justifyContent: 'center'
      };
    }
  };

  giveMedalToRank = (rank) => {
    if (rank + 1 === 1) return '🥇';
    else if (rank + 1 === 2) return '🥈';
    else if (rank + 1 === 3) return '🥉';
  }


  getLeaderboards(){
    const { game, navigation: {navigate}} = this.props;
    const auth = this.props.auth;
    return game.leaderboards.map((player, index, array) => {
      return(
        <View>
          { player.score !== null && player.score !== 0
            ?
              <View key={'mainItem'+index} style={styles.listItem}>
                <View key={'styleRank'+index} style={this.styleRank(index)}>
                  <Text key={'textRank'+index} style={styles.styleRankNumber}>
                    {this.giveMedalToRank(index)}
                    {index + 1}
                  </Text>
                </View>
                <View key={'leaderboards'+index} style={styles.playersStats}>
                  <View key={'nameRank'+index} style={styles.playersName}>
                    <Text key={'textRank'+index} style={styles.nameText}>{player.first_name} {player.last_name} </Text>
                  </View>
                  <View key={'listItem'+index} style={styles.styleListItemProps}>
                    <Text key={'listScore'+index} style={styles.listItemPoints}>
                      {player.score}-Streak
                    </Text>
                  </View>
                </View>
              </View>
            :
              <View key={'nullRank'+index}>
              </View>
          }
        </View>


        )
    })
  }

  render(){
    const { game, navigation: {navigate}} = this.props;
    const auth = this.props.auth;
    console.log('GAME STATUS', game);
    return(
      <View style={styles.container}>
        <ImageBackground source={require('../../img/f-bg.png')} style={styles.listContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../../img/f-logo-1.png')} style={styles.logoStyle} resizeMode='contain'/>
        </View>
        { this.getLeaderboards() }
        </ImageBackground>
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

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardsScreen)