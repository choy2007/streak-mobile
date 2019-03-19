import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
import RF from "react-native-responsive-fontsize";
var { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    topContainer: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#EB9592',
        // height: height/12,
        width: (width/3),
        borderRadius: 30,
        shadowOffset: { width: 0.75, height: 0.75 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
    },
    topStyle: {
        flex: 1, 
        alignItems: 'center'
    },
    bottomContainer: {
        flex: 2, 
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    leftContainer: {
        flex: 1, 
        flexDirection: 'column', 
        alignItems: 'center',
        backgroundColor: '#EB9592',
        borderRadius: 30,
        // width: (width/6),
        height: height/3,
        shadowOffset: { width: 0.75, height: 0.75 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        paddingRight: 20
    },
    rightContainer: {
        flex: 1, 
        flexDirection: 'column', 
        alignItems: 'center',
        backgroundColor: '#EB9592',
        borderRadius: 30,
        // width: (width/6),
        height: height/3,
        shadowOffset: { width: 0.75, height: 0.75 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        paddingLeft: 20
    },
    playerName: {
        fontSize: RF(3.5),
        color: vars.colorText
    },
    playerScore: {
        fontSize: RF(3.5),
        color: vars.colorText
    }
})