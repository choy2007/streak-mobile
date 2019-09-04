import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';

import { createStore } from 'redux'

import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import firebase from 'react-native-firebase';

import store from './src/store';
import { storeData, removeData } from './src/utils/storage';
import AppNavigation from './src/navigation';

import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';

const cable = RNActionCable.createConsumer('ws://localhost:3000/cable');

export default class App extends Component<Props> {
  componentDidMount() {
    if (Platform.OS === "android"){
      firebase.messaging().getToken()
      .then(fcmToken => {
        if (fcmToken) {
          console.log(fcmToken, 'FCMTOKEN');
          storeData('fcmToken', fcmToken);
        } else {
          // user doesn't have a device token yet
        } 
      });
    }
  }

  render() {
    console.disableYellowBox = true;
    return (
      <PaperProvider>
        <StoreProvider store ={store}>
          <ActionCableProvider cable={cable}>
            <AppNavigation />
          </ActionCableProvider>
        </StoreProvider>
      </PaperProvider>
    );
  }
}
