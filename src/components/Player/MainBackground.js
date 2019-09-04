import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import styles from '../../styles/game-bg';

export default class MainBackground extends Component {
  render() {
    return (
      <ImageBackground source={require('../../img/f-bg.png')} style={styles.container}>
        { this.props.children }
      </ImageBackground>
    )
  }
}

