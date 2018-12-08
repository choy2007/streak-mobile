import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height*.07,
  },

  readyContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  readyLogo: {
    resizeMode: 'contain',
  },
  titleText: {
    textAlign: 'center',
    color: vars.colorBlack,
    fontSize: 16
  },
  readyText: {
    textAlign: 'center',
    color: vars.colorPrimary,
    fontSize: 16
  },
  
})
