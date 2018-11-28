import React, { Component } from 'react';
import { 
  View, 
  Image, 
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Button, Headline, Text } from 'react-native-paper';

import MainBackground from '../components/Player/MainBackground';
import styles from '../styles/login';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as loginActions from '../actions/login_actions';
import { retrieveData } from '../utils/storage';

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
          <View style={styles.logoContainer}>
            <View style={styles.headerContainer}>
              
            </View>
            <Image source={require('../img/peach-logo.png')} style={styles.logoStyle}/>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                style={{ flex: 8 }}
                placeholder="Email"
              />
            </View>
            <View style={styles.inputContainer}>
              
              <TextInput
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                style={{ flex: 8 }}
                placeholder="Password"
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity onPress={() => login_actions.login(this.state)}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </View>
            </TouchableOpacity>
        
            <View style={styles.otherLinks}>
              <Text style={{flex: 1, color: '#FFF' }}>Forgot Password</Text>
            </View>
          </View>
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


