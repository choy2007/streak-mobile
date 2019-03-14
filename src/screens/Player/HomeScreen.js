import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground, Alert } from 'react-native';
import styles from '../../styles/home';
import headerstyles from '../../styles/game-header';
import PlayerHeader from '../../components/Player/Header';
import vars from '../../styles/variables';
import Loading from '../../components/Loading';
import GameHeader from '../../components/Player/GameHeader';

import * as gameActions from '../../actions/game_actions';

import { ACTION_CABLE_URL } from '../../config/api';
import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HomeScreen extends Component{
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image source={require('../../img/f-home.png')} style={{tintColor}} />
    )
  }

  constructor(){
    super();

    this.state = {
      connected: false,
      
    }
    this.cable = RNActionCable.createConsumer(`${ACTION_CABLE_URL}`)
    this._handleReceivedCable = this._handleReceivedCable.bind(this)
    this._handleActiveGame = this._handleActiveGame.bind(this)
  }

  componentDidMount() {
    const auth = this.props.auth;
    this.props.game_actions.fetch_active_game(auth);
    this._handleActiveGame();
  }

  _handleActiveGame() {
    this.subscription = this.cable.subscriptions.create('GameRoomChannel', {
      received: (data) => this._handleReceivedCable(data.game),
    })
  }

  _handleReceivedCable(game) {
    const auth = this.props.auth;
    if (game.status == "Active") {
      this.props.game_actions.fetch_active_game(auth)
    } else {
      this.props.game_actions.removeInactiveGame(auth)
    }
    console.log(`GAME STATUS CABLE IS`, game)
  }

  onReceived = (data) => {
    console.log(`onReceived STATE: `, data)
    this.setState({ game: data.name, ...this.state.game })
  }

  clickGame(game, auth) {
    const { navigate } = this.props.navigation; 
    this.props.game_actions.userJoin(auth, game.activeGame[0].id)
    navigate('Waiting', { game });
  }

  getGame(){
    const { game, auth, navigation: { navigate } } = this.props;

    return (
        <View style={styles.container}>
          <GameHeader />
          <ActionCable channel={{channel: 'GameRoomChannel'}} onReceived={this.onReceived} />
          { game.activeGame.length > 0 
            ?
              // <TouchableOpacity onPress={() => this.clickGame(game, auth)}>
                <ImageBackground source={require('../../img/home-bg.png')} resizeMode='cover' style={styles.listContainer}>
                  <View style={styles.overlay}/>
                  <View style={styles.logoContainer}>
                    <Image source={require('../../img/f-logo-1.png')} style={styles.logoStyle} resizeMode='contain'/>
                  </View>
                    <Text style={styles.listTitle}>{game.activeGame && game.activeGame[0] && game.activeGame[0].name}</Text>
                    <TouchableOpacity onPress={() => this.clickGame(game, auth)}>
                      <View styles={styles.playButtonContainer}>
                        <View style={styles.buttonContainer}>
                          <Text style={styles.buttonText}>PLAY</Text>
                        </View>
                      </View>   
                    </TouchableOpacity>
                </ImageBackground>
              // </TouchableOpacity>
            :
              <ImageBackground source={require('../../img/home-bg.png')} resizeMode='cover' style={styles.listContainer}>
                <View style={styles.overlay}/>
                <View style={styles.logoContainer}>
                  <Image source={require('../../img/f-logo-1.png')} style={styles.logoStyle} resizeMode='contain'/>
                </View>  
                  <Text style={styles.listTitle}>No current games ongoing!</Text>
              </ImageBackground>

          }
        </View>
    )
  }

  render(){
    const { game, navigation: {navigate}} = this.props;
    
    return(
      <View style={styles.container}>
        {this.getGame()}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)