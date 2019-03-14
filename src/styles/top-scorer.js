import { StyleSheet, Dimensions } from 'react-native';
import variables from './variables';
import RF from "react-native-responsive-fontsize";
var { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
    playerName: {
        fontSize: RF(3.5),
        color: '#000'
    },
    playerScore: {
        fontSize: RF(3.5),
        color: '#000'
    }
})