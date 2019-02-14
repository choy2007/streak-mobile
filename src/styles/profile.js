import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import variables from './variables';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: vars.colorWhite,
  },
  listContainer: {
    height: height/1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
    opacity: 0.70
  },
  logoContainer: {
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoStyle: {
    width: 50,
    height: 50,
  },
  accountContainer: {
    flex: 1,
    //flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 75,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 100,
    height: 125,
    width: 125,
    backgroundColor: vars.colorPrimary
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    //paddingLeft: 20
  },
  nameStyle: {
    fontSize: 22,
    //paddingVertical: 2,
    fontFamily: vars.fontFamily,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#EB9592',
  },
  otherNameStyle: {
    fontSize: 16,
    //paddingVertical: 2,
    fontFamily: vars.fontFamily,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  settingsContainer: {
    flex: 3,
    paddingHorizontal: 40,
    marginBottom: '15%'
  },
  settingStyle: {
    flex: 1,
    flexDirection: 'row',
    borderColor: vars.colorGray,
    borderBottomWidth: 1
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    width: 25, 
    height: 25,
    resizeMode: 'contain'
  },
  settingTextContainer: {
    flex: 2,
    justifyContent: 'center'
  }
})
