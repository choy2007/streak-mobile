import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
const { width, height } = Dimensions.get('window');
import RF from "react-native-responsive-fontsize";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    height: height/1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  listTitle: {
    fontSize: RF(4),
    fontFamily: 'Avenir',
    //fontFamily: 'SF-Pro-Display-Regular',
    //color: vars.colorText
    color: '#000',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
    opacity: 0.70
  }
})
