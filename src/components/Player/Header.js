import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/header';

export default class PlayerHeader extends Component {
  render() {
    const { title, back, close }  = this.props;
    return(
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
    )
  }
}
