import React, { Component } from 'react';
import styles from '../../styles/point';

import { ACTION_CABLE_URL } from '../../config/api';
import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';

import * as gameActions from '../../actions/game_actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class Point extends Component {
  render() {
    return (
      <Text> POINT COMPONENT </Text>
    )
  }
}
