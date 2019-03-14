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
    alignItems: 'center',
  },
  listTitle: {
    paddingTop: height/3.5, 
    fontSize: RF(4),
    fontFamily: 'Avenir',
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
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: width/6,
    height: height/6,
  },
  playButtonContainer: {
    paddingTop: height/4, 
  },
  buttonContainer: {
    backgroundColor: '#fdded4',
    borderRadius: 40,
    width: width/2,
    paddingHorizontal: 40,
    paddingVertical: 6,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: variables.fontFamily,
    fontSize: RF(2.5),
    fontWeight: 'bold',
    color: '#000',
  },
})
