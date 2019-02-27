import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
import RF from "react-native-responsive-fontsize";
var { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  question: {
    marginTop: height*.05,
  },
  choiceContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  listContainer1: {
    //backgroundColor: vars.colorPrimary,
    backgroundColor: '#EB9592',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: (width/2)+75,
    height: (height/6)-12.5,
    margin: 5
  },
  listTitle: {
    fontSize: RF(2.75),
    fontFamily: 'Avenir',
    color: vars.colorText,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 20,
    paddingTop: 5
  },
})
