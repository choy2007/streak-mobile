import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import { storeData, removeData } from '../../utils/storage';
import { withNavigation, NavigationActions } from 'react-navigation';
import styles from '../../styles/game-header';

import RNActionCable from 'react-native-actioncable';
import ActionCableProvider, { ActionCable } from 'react-actioncable-provider';
import { ACTION_CABLE_URL } from '../../config/api';

class ExitButton extends React.Component {
  constructor(){
    super();

    this.cable = RNActionCable.createConsumer(`${ACTION_CABLE_URL}`)
  }

  button() {
    const { navigate, game } = this.props;
    Alert.alert(
      'Exit Game',
      'Are you sure you want to exit the game?',
      [
        {text: 'NO', style: 'cancel'},
        {text: 'YES', onPress: () => 
          { 
            this.props.game_actions.after_game_state();
            console.log(this.cable.subscriptions.remove(this.props.subscription), 'asdasd');
            this.cable.subscriptions.remove(this.props.subscription);
            NavigationActions.reset({index: 1, actions: [navigate('Home')]});
          }
        },
          
      ]
    );
  }

  render() {
    const { navigate } = this.props;
    return(
      <TouchableOpacity style={styles.exitButtonStyle} onPress={()=>this.button()}>
          <Text style={styles.exit}>X</Text>
          <Text style={styles.subText}>
            EXIT
          </Text>
      </TouchableOpacity>
    )
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(ExitButton);