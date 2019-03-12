import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    top: 0,
    height: height*.10,
    backgroundColor: vars.colorWhite,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  exitButtonStyle: {
    marginTop: height*.03,
    marginLeft: width/12,
    backgroundColor: '#f0ede7',
    borderRadius: 15,
    width: width/9,
    height: height/16,  
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#d9d6d0',
  },
  exit: {
    color: '#796367',
    fontWeight: 'bold',
  },
  timerContainer: {
    marginTop: height*.03,
    backgroundColor: '#f0ede7',
    borderRadius: 15,
    width: width/9,
    height: height/16,  
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0.25, height: 0.25 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
  },
  questionTimer: {
    color: '#796367',
    fontWeight: 'bold', 
  },
  scoreContainer:{
    marginTop: height*.03,
    marginRight: width/12,
    backgroundColor: '#f0ede7',
    borderRadius: 15,
    width: width/9,
    height: height/16,  
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0.25, height: 0.25 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
  },
  currentScore: {
    color: '#796367',
    fontWeight: 'bold', 
  },
})
