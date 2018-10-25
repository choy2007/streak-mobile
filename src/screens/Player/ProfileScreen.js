import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as loginActions from '../../actions/login_actions';
import { retrieveData } from '../../utils/storage';

import { NavigationActions } from 'react-navigation';

import PlayerHeader from '../../components/Player/Header';
import styles from '../../styles/profile';

class ProfileScreen extends Component{
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image source={require('../../img/profile-icon.png')} style={{tintColor}} />
    )
  }

  render(){
    const { 
      navigation: { navigate }, 
      auth: { user },
      login_actions
    } = this.props
    return(
      <View style={styles.container}>
        <PlayerHeader title="Profile" />
        <Text> Profile </Text>
        <TouchableOpacity onPress={() => this.props.login_actions.logout()} style={{flex: 1, flexDirection: 'row', borderColor: '#fff', borderBottomWidth: 0}}>
            <View style={styles.iconContainer}>
              <Image source={require('../../img/logout.png')} style={styles.iconStyle}/>
            </View>
            <View style={styles.settingTextContainer}>
              <Text>Logout</Text>
            </View>
          </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login_actions: bindActionCreators(loginActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);