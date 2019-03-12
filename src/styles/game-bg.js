import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import variables from './variables';

module.exports = StyleSheet.create({
  container: {
    flex: 1, 
    width: 'auto', 
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 1,
    position: 'absolute',
    width: width/1.25,
    height: height/1.25,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: width/9,
    height: height/9,
  },
})
