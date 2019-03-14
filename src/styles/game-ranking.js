import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
import RF from "react-native-responsive-fontsize";
var { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
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
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#EB9592',
        height: height/15,
        width: (width/2)+115,
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
    }
})