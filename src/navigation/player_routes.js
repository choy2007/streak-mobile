import { TabNavigator, DrawerNavigator, TabView } from 'react-navigation';
import HomeScreen from '../screens/Player/HomeScreen';
import ProfileScreen from '../screens/Player/ProfileScreen';
import vars from '../styles/variables';
import { Platform } from 'react-native';
const TabPlayerRoutes = TabNavigator({
  Home: { screen: HomeScreen, navigationOptions: { header: null, headerMode: 'screen' } },
  Profile: { screen: ProfileScreen, navigationOptions: { header: null, headerMode: 'screen' } }
},{
    swipeEnabled: true,
    lazy: false,
    tabBarOptions: {
      //activeTintColor: vars.colorPrimary,  // Color of tab when pressed
      activeTintColor: '#fdded4',
      //inactiveTintColor: '#b5b5b5', // Color of tab when not pressed
      inactiveTintColor: 'white',
      showIcon: 'true', // Shows an icon for both iOS and Android
      showLabel: (Platform.OS !== 'android'), //No label for Android
      labelStyle: {
        fontSize: 11,
      },
      style: {
        backgroundColor: 'gray', // Makes Android tab bar white instead of standard blue
        height: (Platform.OS === 'ios') ? 40 : 50 
      }
    },
    tabBarPosition: Platform.OS === 'android' ? 'bottom' : 'bottom'
  }
)

const PlayerNavigator = DrawerNavigator({
  Player: TabPlayerRoutes 
}, {
    drawerPosition: 'right',
    drawerWidth: 250,
  }
)

PlayerNavigator.navigationOptions = {
  header: null
}

export default PlayerNavigator;
