import React, { Component } from 'react';
import { API_KEY } from  '../../config/api';
import { 
  View, 
  Image, 
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Linking,
  Navigator,
  Alert
} from 'react-native';
import { Button, Headline, Text } from 'react-native-paper';

import MainBackground from '../../components/Player/MainBackground';
import styles from '../../styles/login';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as loginActions from '../../actions/login_actions';
import { retrieveData } from '../../utils/storage';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

class ChangePasswordScreen extends Component{
  constructor(){
    super();

    this.state = {
      old_password: '',
      password: '',
      confirm_password: '',
    }
  }

  componentDidMount(){
    const auth = this.props.auth;
  }

  render() {
    const { auth } = this.props;
    console.log(`AUTH IS`, auth);
    const { navigation: { navigate }, login_actions  } = this.props
    return (
        <MainBackground>
          <KeyboardAvoidingView
            style={styles.formContainer}
            behavior={Platform.OS === "ios" ? "padding" : null}
          >
            <Text/>
            <Text/>
            <Text/>
            <Text/>
            <Text/>
            <Text/>
            <View style={styles.inputContainer}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.email}
                onChangeText={old_password => this.setState({ old_password })}
                style={{ flex: 1, color: "black" }}
                underlineColorAndroid="#D3D3D3"
                placeholder="Old Password"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                style={{ flex: 1, height: Platform.OS == 'android' ? 40 : 20}}
                placeholder="New Password"
                underlineColorAndroid="#D3D3D3"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                value={this.state.confirm_password}
                onChangeText={confirm_password => this.setState({ confirm_password })}
                style={{ flex: 1, height: Platform.OS == 'android' ? 40 : 20}}
                placeholder="Confirm Password"
                underlineColorAndroid="#D3D3D3"
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity onPress={() => {
              if((this.state.password === this.state.confirm_password) && (this.state.old_password !== (this.state.password || this.state.confirm_password))){
                login_actions.change_password(auth.user.user.id, this.state.password);
              } else {
                Alert.alert('Something went wrong. Make sure your input fields are correct!');
              }
            }}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>SUBMIT</Text>
              </View>
            </TouchableOpacity>
          
          </KeyboardAvoidingView>

        </MainBackground>
    )
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth,
  }
}

function mapDispatchToProps(dispatch){
  return {
    login_actions: bindActionCreators(loginActions, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(ChangePasswordScreen);