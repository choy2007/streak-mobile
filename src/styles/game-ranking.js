import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
import RF from "react-native-responsive-fontsize";
var { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      width: width,
      height: 85,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
      }
    },
    // titleContainer: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // titleText: {
    //     textAlign: 'center',
    //     color: vars.colorBlack,
    //     fontSize: RF(3.5),
    //     fontWeight: 'bold',
    //     textTransform: 'uppercase',
    // },
    playerContainer: {
        // alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // height: height/15,
        // width: (width/2)+115,
    },
    pointsContainer: {
        alignItems: 'center',
    },
    nameContainer: {
        justifyContent: 'center'
    },
    playerName: {
        fontSize: RF(2.5),
        color: vars.colorBlack,
    },
    playerScore: {
        fontSize: RF(3),
        color: vars.colorBlack,
        fontWeight: 'bold',
        paddingRight: width/18
    },
    subText: {
        fontSize: RF(1.25),
        color: vars.colorBlack
    },
    imageStyle: {
      borderRadius: 100,
      width: 40,
      height: 40,
      backgroundColor: vars.colorPrimary,
      
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