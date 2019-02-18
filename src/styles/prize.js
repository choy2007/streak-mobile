import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import variables from './variables';
import RF from "react-native-responsive-fontsize";

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
    fontSize: RF(4),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  prizeText: {
    textAlign: 'center',
    //color: vars.colorBlack,
    color: '#fdded4',
    fontSize: RF(10),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  
})
