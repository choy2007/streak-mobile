import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import styles from '../../styles/game-bg';

export default class MainBackground extends Component {
  render() {
    return (
      <ImageBackground source={require('../../img/bg1.png')} style={styles.container}>
        { this.props.children }
      </ImageBackground>
    )
  }
}

