import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import styles from '../../styles/home';
import PlayerHeader from '../../components/Player/Header';
import vars from '../../styles/variables'

export default class ProfileScreen extends Component{
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image source={require('../../img/profile-icon.png')} style={{tintColor}} />
    )
  }

  render(){
    return(
      <View style={styles.container}>
        <PlayerHeader title="Profile" />
        <Text> Profile </Text>
      </View>
    )
  }
}