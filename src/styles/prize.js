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

  prizeContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  prizeLogo: {
    resizeMode: 'contain',
  },
  titleText: {
    textAlign: 'center',
    color: vars.colorBlack,
    fontSize: 16
  },
  prizeText: {
    textAlign: 'center',
    color: vars.colorPrimary,
    fontSize: 16
  },
  
})
