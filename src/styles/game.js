import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
import RF from "react-native-responsive-fontsize";
var { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: -30
    // marginTop: 30
  },
  // question: {
  //   marginTop: height*.05,
  // },
  choiceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30
  },
  listContainer1: {
    //backgroundColor: vars.colorPrimary,
    backgroundColor: '#EB9592',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: (width/2)+75,
    height: (height/7)+5,
    margin: 5,
  },
  listContainer2: {
    backgroundColor: '#796367',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: (width/2)+75,
    height: (height/7),
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
})
