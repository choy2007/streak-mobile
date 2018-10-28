import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  waitingTitle: {
    color: vars.colorText,
    fontFamily: 'Avenir',
    fontSize: 20
  }
})
