import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    top: 0,
    height: height*.10,
    backgroundColor: vars.colorWhite,
    justifyContent: 'space-between',
    //paddingHorizontal: 30,
    flexDirection: 'row',
  },
  // titleStyle: {
  //   flex: 8,
  //   marginTop: height*.04,
  //   color: vars.colorText,
  //   fontFamily: 'Avenir',
  //   fontSize: 20,
  // },
  exitButtonStyle: {
    marginTop: height*.08,
  },
    buttonContainer: {
    backgroundColor: '#ffda82',
    borderRadius: 25,
    height: 35,
    width: 35,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  questionTimer: {
    marginTop: height*.02,
    // color: '#000',
    // fontWeight: 'bold',
    // justifyContent: 'center',
    // alignItems: 'center',
    // textAlign: 'center',
    // backgroundColor: '#ffda82',
    // height: 35,
    // width: 35,    
  },
  currentScore: {
    marginTop: height*.02,
  }
})
