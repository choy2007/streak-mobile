import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
const { width, height } = Dimensions.get('window');
import RF from "react-native-responsive-fontsize";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height*.07,
  },
  pointContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  readyLogo: {
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
})
