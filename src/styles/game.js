import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
const { width, height } = Dimensions.get('window');
import RF from "react-native-responsive-fontsize";

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
    width: 250,
    height: 100,
    margin: 5
  },
  listTitle: {
    fontSize: RF(2.75),
    fontFamily: 'Avenir',
    color: vars.colorText,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 20,
    padding: 11
  },
})
