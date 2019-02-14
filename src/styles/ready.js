import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height*.07,
  },
  readyContainer: {
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
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  readyText: {
    textAlign: 'center',
    //color: vars.colorPrimary,
    color: '#fdded4',
    fontSize: 60,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  
})
