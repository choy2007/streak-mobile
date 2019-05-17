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
  prizeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30
  },
  prizeLogo: {
    width: 175,
    height: 175,
    position: 'relative', 
    marginBottom: height*.025,
    // marginTop: height*.025,
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
    color: vars.colorPrimary,
    fontSize: RF(10),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  
})
