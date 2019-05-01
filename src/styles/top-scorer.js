import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
import RF from "react-native-responsive-fontsize";
var { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      // width: width,
      // height: 85,
      // shadowColor: '#000000',
      // shadowOffset: {
      //   width: 0,
      //   height: 3
      // }
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        textAlign: 'center',
        color: vars.colorBlack,
        fontSize: RF(3.5),
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    playerContainer: {
        // flex: 1,
        // alignItems: 'center',
        flexDirection: 'column',
        // height: height/15,
        // width: (width/2)+115,
    },
    pointsContainer: {
        flexDirection: 'column',
    },
    nameContainer: {
        paddingLeft: width/3
    },
    playerName: {
        fontSize: RF(2.5),
        color: vars.colorBlack,
    },
    playerScore: {
        fontSize: RF(3),
        color: vars.colorWhite,
        fontWeight: 'bold'
    },
    subText: {
        fontSize: RF(1.25),
        color: vars.colorWhite
    },
    imageStyle: {
      borderRadius: 100,
      width: 50,
      height: 50,
      backgroundColor: vars.colorPrimary
    },
    // scoreContainer: {
    //   paddingTop: height/7
    // },
    // userContainer:{
    //   paddingTop: height/7 
    // },
    // score2Container: {
    //   paddingRight: width/3
    // },
    // pointText: {
    //   fontSize: RF(3),
    //   color: '#796367',
    //   fontWeight: 'bold', 
    // },
    // userText:{
    //   fontSize: RF(3),
    //   color: '#000',
    //   fontWeight: 'bold'
    // }
})