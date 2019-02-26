import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import RF from "react-native-responsive-fontsize";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  waitingTitle: {
    color: '#000',
    fontFamily: 'Avenir',
    fontSize: RF(3.5),
    fontWeight: 'bold',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: 175,
    height: 175,
    position: 'relative'
  }
})
