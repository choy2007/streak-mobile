import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import variables from './variables';
import RF from "react-native-responsive-fontsize";

module.exports = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    left: 15,
    top: 20
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoStyle: {
    width: 175,
    height: 175,
    flex: 1,
    position: 'relative'
  },
  formContainer: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 170,
  },
  inputContainer: {
    backgroundColor: '#fff',  
    borderColor: '#000', 
    borderRadius: 50, 
    padding: 12.5, 
    flexDirection: 'row',
    marginVertical: 5,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
  },
  buttonContainer: {
    //backgroundColor: variables.colorSecondary,
    backgroundColor: '#ffda82',
    borderRadius: 50,
    padding: 10,
    marginVertical: 10,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
  },
  orStyle: {
    marginVertical: 10,
    textAlign: 'center',
    color: variables.colorText,
    fontSize: RF(3),
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: variables.fontFamily,
    fontSize: RF(3),
    fontWeight: 'bold',
    color: '#FFF'
  },
  otherLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
