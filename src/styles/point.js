import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
const { width, height } = Dimensions.get('window');
import RF from "react-native-responsive-fontsize";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: height*.07,
  },
  pointContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    textAlign: 'center',
    color: vars.colorBlack,
    fontSize: RF(4),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  logoStyle: {
    width: width/4,
    height: height/4,

  },
})
