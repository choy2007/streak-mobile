import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import variables from './variables';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingBottom: 50
  },
  logoStyle: {
    width: 50,
    height: 50,
  },
  prizeContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  prizeLogo: {
    width: 175,
    height: 175,
    position: 'relative', 
    marginBottom: height*.025,
    marginTop: height*.025,
  },
  titleText: {
    textAlign: 'center',
    color: vars.colorBlack,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  prizeText: {
    textAlign: 'center',
    //color: vars.colorBlack,
    color: '#fdded4',
    fontSize: 60,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  
})
