import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
const { width, height } = Dimensions.get('window');
import RF from "react-native-responsive-fontsize";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  readyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30
  },
  readyLogo: {
    width: 175,
    height: 175,
    position: 'relative', 
    marginBottom: height*.025,
    //marginTop: height*.025,
  },
  titleText: {
    textAlign: 'center',
    color: vars.colorBlack,
    fontSize: RF(4),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  readyText: {
    textAlign: 'center',
    //color: vars.colorPrimary,
    color: '#fdded4',
    fontSize: RF(10),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  
})
