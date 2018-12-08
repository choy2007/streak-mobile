import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import styles from '../../styles/game-bg';

export default class GameBackground extends Component {
  render() {
    return (
      <ImageBackground source={require('../../img/game-bg.png')} style={styles.container}>
        {this.props.children}
      </ImageBackground>
    )
  }
}
