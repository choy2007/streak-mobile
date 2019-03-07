import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import { withNavigation, NavigationActions } from 'react-navigation';
import styles from '../../styles/game-header';

class ExitButton extends React.Component {
  button() {
    const { navigate } = this.props;
    Alert.alert(
      'Exit Game',
      'Are you sure you want to exit the game?',
      [
        {text: 'NO', style: 'cancel'},
        {text: 'YES', onPress: () => navigate('Home')},
      ]
    );
  }

  render() {
    const { navigate } = this.props;
    return(
      <TouchableOpacity style={styles.exitButtonStyle} onPress={()=>this.button()}>
          <Text>Exit</Text>
      </TouchableOpacity>
    )
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(ExitButton);