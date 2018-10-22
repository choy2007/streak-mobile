import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Headline } from 'react-native-paper';
import styles from '../styles/splash';

export default class Screen1 extends Component {
  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('Home'), 2000)
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Headline>Streak</Headline>
      </View>
    )
  }
}
