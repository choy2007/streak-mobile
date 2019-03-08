import React, { Component } from 'react';
import { 
  View, 
  Image, 
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { Button, Headline, Text } from 'react-native-paper';

import MainBackground from '../components/Player/MainBackground';
import styles from '../styles/login';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as loginActions from '../actions/login_actions';
import { retrieveData } from '../utils/storage';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

class LoginScreen extends Component {
  constructor(){
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  async componentWillMount() { // This is for auto login
    const { login_actions } = this.props;

    let email = await retrieveData('email');
    let password = await retrieveData('password');
    console.log(email, password)

    if (email && password) {
      login_actions.login({ email: email, password: password });
    }

  }

  render() {
    const { navigation: { navigate }, login_actions  } = this.props
    return (
        <MainBackground>
          <KeyboardAvoidingView
            style={styles.formContainer}
            behavior={Platform.OS === "ios" ? "padding" : null}
          >
            <View style={styles.logoContainer}>
              {/* <View style={styles.headerContainer}>
              </View> */}
              <Image source={require('../img/f-logo-1.png')} style={styles.logoStyle} resizeMode='contain'/>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                style={{ flex: 1, color: "black" }}
                underlineColorAndroid="#D3D3D3"
                placeholder="Email"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                style={{ flex: 1, height: Platform.OS == 'android' ? 40 : 20}}
                placeholder="Password"
                underlineColorAndroid="#D3D3D3"
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity onPress={() => login_actions.login(this.state)}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </View>
            </TouchableOpacity>
        
            <View style={styles.otherLinks}>
              <Text style={{color: '#000', fontWeight: 'bold' }}>Forgot Password?</Text>
            </View>
          </KeyboardAvoidingView>

        </MainBackground>
    )
  }
}

function mapStateToProps(state){
  return {
    auth: state.user,
  }
}

function mapDispatchToProps(dispatch){
  return {
    login_actions: bindActionCreators(loginActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);