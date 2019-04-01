import React, { Component } from 'react';
import { Text, ActivityIndicator, View } from 'react-native';

export default class Loading extends Component {
  render() {
    return (
      <ActivityIndicator
        style={{flex: 1}}
        size='large'
        animating={true}
        color='rgba(44, 62, 80,1.0)' />
    )
  }
}

