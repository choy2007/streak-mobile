import React, { Component } from 'react';
import { ImageBackground , View, Image} from 'react-native';
import styles from '../../styles/game-bg';

export default class GameBackground extends Component {
  render() {
    return (
      <ImageBackground source={require('../../img/f-bg.png')} style={styles.container}>
        <View style={styles.centerContainer}>
          <Image source={require('../../img/f-logo-1.png')} style={styles.logoStyle} resizeMode='contain'/>
            {this.props.children}
        </View>  
      </ImageBackground>
    )
  }
}
