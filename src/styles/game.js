import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  question: {
    flex: 2,
    marginTop: height*.07,
  },
  choiceContainer: {
    flex: 3,
  },
  listContainer1: {
    backgroundColor: vars.colorPrimary,
    justifyContent: 'center',
    padding: 10
  },
  listTitle: {
    fontSize: 25,
    fontFamily: 'Avenir',
    color: vars.colorText,
    padding: 10
  },
})
