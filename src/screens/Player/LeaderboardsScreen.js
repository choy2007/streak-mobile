import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground, Alert } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import styles from '../../styles/home';
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

  getLeaderboards(){
    const { game, navigation: {navigate}} = this.props;
    const auth = this.props.auth;
    return game.leaderboards.map(player => {
      return(
          <View>
          { player.score > 0 
            ?
              <Text> { player.first_name} {player.score} </Text>
            
            :
              <Text />
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
      <ImageBackground source={require('../../img/f-game-bg.png')} resizeMode='cover' style={styles.listContainer}>
        { this.getLeaderboards()}
      </ImageBackground>
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