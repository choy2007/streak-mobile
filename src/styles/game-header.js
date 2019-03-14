import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
const { width, height } = Dimensions.get('window');
import RF from "react-native-responsive-fontsize";

module.exports = StyleSheet.create({
  container: {
    top: 0,
    height: height*.10,
    backgroundColor: vars.colorWhite,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  exitButtonStyle: {
    marginTop: height*.0275,
    marginLeft: width/12,
    backgroundColor: '#f0ede7',
    borderRadius: 10,
    width: width/9,
    height: height/15,  
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#d9d6d0',
  },
  exit: {
    fontSize: RF(3),
    color: '#796367',
    fontWeight: 'bold',
  },
  timerContainer: {
    marginTop: height*.0275,
    backgroundColor: '#f0ede7',
    borderRadius: 40,
    width: width/9,
    height: height/15,  
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0.25, height: 0.25 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
  },
  questionTimer: {
    color: '#796367',
    fontWeight: 'bold', 
    fontSize: RF(3.5),
  },
  scoreContainer:{
    marginTop: height*.0275,
    marginRight: width/12,
    backgroundColor: '#f0ede7',
    borderRadius: 10,
    width: width/9,
    height: height/15,  
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0.25, height: 0.25 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
  },
  currentScore: {
    fontSize: RF(3),
    color: '#796367',
    fontWeight: 'bold', 
  },
  subText: {
    fontSize: RF(1.25),
    color: '#796367',
  }
})
