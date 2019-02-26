import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
import RF from "react-native-responsive-fontsize";
var { width, height } = Dimensions.get('window');
var DEVICE_WIDTH = Dimensions.get('window').width;
var DEVICE_HEIGHT = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  question: {
    flex: 2,
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
    //width: 250,
    //height: 100,
    //width: (DEVICE_WIDTH/2)+75,
    //height: (DEVICE_HEIGHT/6)-12.5,
    margin: 5
  },
  listTitle: {
    fontSize: RF(2.75),
    fontFamily: 'Avenir',
    color: vars.colorText,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 20,
  },
  // loading_spinner:{
  //     alignItems:'center',
  //     position: 'absolute',
  //     left: (width/2)-40,
  //     top: height/2,
  // }
})
