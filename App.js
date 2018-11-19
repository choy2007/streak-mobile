import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { createStore } from 'redux'

import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper'

import store from './src/store';
import AppNavigation from './src/navigation';

import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';

const cable = RNActionCable.createConsumer('ws://localhost:3000/cable');

export default class App extends Component<Props> {
  render() {
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