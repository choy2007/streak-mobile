import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import styles from '../../styles/home';
import PlayerHeader from '../../components/Player/Header';
import vars from '../../styles/variables'

import { connect } from 'react-redux';

class HomeScreen extends Component{
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image source={require('../../img/home-icon.png')} style={{tintColor}} />
    )
  }

  getGame(){
    return (
      <TouchableOpacity>
        <ImageBackground source={require('../../img/game-bg-1.png')} resizeMode='cover' style={styles.listContainer}>
          <View style={styles.overlay}/>
          <Text style={styles.listTitle}>Game: {this.props.game}</Text>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <PlayerHeader title="Home" />
        <ScrollView>
          {this.getGame()}
        </ScrollView>
      </View>
    )
  }
}
function mapStateToProps(state){
  return{
    game: state.game
  }
}

function mapDispatchToProps(dispatch){
  return{
    getGame: () => dispatch({ type: 'GET_GAME'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)