import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  waitingTitle: {
    color: '#000',
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoStyle: {
    width: 175,
    height: 175,
    position: 'relative'
  }
})
