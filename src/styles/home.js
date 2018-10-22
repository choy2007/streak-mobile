import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    height: height/5,
    backgroundColor: 'red',
    justifyContent: 'center',
    padding: 10
  },
  listTitle: {
    fontSize: 25,
    fontFamily: 'Avenir',
    color: vars.colorText
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.5
  }
})
