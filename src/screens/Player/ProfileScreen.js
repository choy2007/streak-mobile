import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
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
      <Image source={require('../../img/f-profile.png')} style={{tintColor}} resizeMode='cover'/>
    )
  }

  componentDidMount(){
    const auth = this.props.auth;
  }

  render(){
    const { auth } = this.props;
    const { navigate } = this.props.navigation;

    return(
      <View style={styles.container}>
        <ImageBackground source={require('../../img/home-bg.png')} resizeMode='cover' style={styles.listContainer}>
        <View style={styles.overlay}/>
          <ScrollView>
          <View style={styles.logoContainer}>
            <Image source={require('../../img/f-logo-1.png')} style={styles.logoStyle} resizeMode='contain'/>
          </View>
          <View style={styles.accountContainer}>
            <View style={styles.imageContainer}>
              <View style={styles.imageStyle}/>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.nameStyle}>{auth.user.user.first_name} {auth.user.user.last_name}</Text>
              <Text style={styles.otherNameStyle}>{auth.user.user.email}</Text>
              <Text style={styles.otherNameStyle}>{auth.user.user.score} wins</Text>
            </View>
            <Text/>
            <TouchableOpacity onPress={() => navigate('ChangePassword')}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>CHANGE PASSWORD</Text>
              </View>
            </TouchableOpacity>
            <Text/>
            <TouchableOpacity onPress={() => this.props.login_actions.logout()}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>LOGOUT</Text>
              </View>
            </TouchableOpacity>
          </View>
          </ScrollView>
          {/*<TouchableOpacity onPress={() => this.props.login_actions.logout()} style={{flex: 1, borderColor: '#fff', borderBottomWidth: 0}}>
              <View style={styles.buttonContainer}>
                <Image source={require('../../img/logout.png')} style={styles.iconStyle}/>
                <Text>LOGOUT</Text>
              </View>
              <View style={styles.settingTextContainer}>
                <Text>Logout</Text>
              </View>
          </TouchableOpacity>*/}
          
        </ImageBackground>
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