import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground, Alert } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import styles from '../../styles/leaderboards';
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
        backgroundColor: '#00BBF0',
        justifyContent: 'center'
      };
    } else if (rank + 1=== 3) {
      return {
        flex: 0.09,
        backgroundColor: '#F12D2D',
        justifyContent: 'center'
      };
    } else if (rank + 1=== 4) {
      return {
        flex: 0.09,
        backgroundColor: '#989898',
        justifyContent: 'center'
      };
    } else if (rank + 1 === 5) {
      return {
        flex: 0.09,
        backgroundColor: '#B8B8B8',
        justifyContent: 'center'
      };
    } else {
      return {
        flex: 0.09,
        backgroundColor: '#D8D8D8',
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
        //   <View>
        //   { player.score > 0 
        //     ?
        //       <Text> { player.first_name} {player.score} </Text>
            
        //     :
        //       <Text />
        //   }
        // </View>
        <View key={index} style={styles.listItem}>
        <View style={this.styleRank(index)}>
          <Text style={styles.styleRankNumber}>
            {this.giveMedalToRank(index)}
            {index + 1}
          </Text>
        </View>

        <View style={styles.playersStats}>
          <View style={styles.playersName}>
            <Text style={styles.nameText}>{player.first_name} {player.last_name} </Text>
          </View>

          <View style={styles.styleListItemProps}>
            <Text style={styles.listItemPoints}>
              {/* <Image style={styles.coin} source={require('../assets/img/DUcoin.png')} /> */}
              {player.score}-Streak
              {/* {this.props.styleFlame(index)} */}
            </Text>
          </View>

          {/* <View style={styles.styleListItemPropsRight}>
            <Text style={styles.listItemPointsRight}>
              <Image style={styles.coinRight} source={require('../assets/img/DUcoin.png')} />
              {data.userXP}
            </Text>
            <Text style={styles.listItemCommentRight}>Total</Text>
          </View> */}
        </View>
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