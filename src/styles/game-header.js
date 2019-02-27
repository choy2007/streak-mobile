import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
const { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    top: 0,
    height: height*.10,
    backgroundColor: vars.colorWhite,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    flexDirection: 'row',
  },
  timerContainer: {
    marginTop: 10,
    backgroundColor: '#ffda82',
    borderRadius: 50,
    height: height*.075,
    width: width*.135,
    textAlign: 'center',
  },
  titleStyle: {
    flex: 8,
    marginTop: height*.04,
    color: vars.colorText,
    fontFamily: 'Avenir',
    fontSize: 20,
  },
  exitButtonStyle: {
    marginTop: height*.04,
  },
  questionTimer: {
    marginTop: height*.04,
    //backgroundColor: '#F0EDE7',
    color: '#000',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  currentScore: {
    marginTop: height*.04,
  }
})
