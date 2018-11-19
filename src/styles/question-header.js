import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    top: 0,
    height: height*.10,
    backgroundColor: vars.colorSecondary,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    flexDirection: 'row'
  },
  titleStyle: {
    flex: 8,
    marginTop: height*.04,
    color: vars.colorText,
    fontFamily: 'Avenir',
    fontSize: 20
  },
  exitButtonStyle: {
    marginTop: height*.04,
    flex: 1 
  },
  questionTimer: {
    marginTop: height*.04,
    color: vars.colorText,
    fontFamily: 'Avenir',
    flex: 2
  },
  currentScore: {
    flex: 1,
    marginTop: height*.04,
    color: vars.colorText,
    fontFamily: 'Avenir',
    justifyContent: 'space-around'
  }
})
