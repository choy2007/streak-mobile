import { TabNavigator, DrawerNavigator, TabView } from 'react-navigation';
import HomeScreen from '../screens/Player/HomeScreen';
import LeaderboardsScreen from '../screens/Player/LeaderboardsScreen';
import ProfileScreen from '../screens/Player/ProfileScreen';
import vars from '../styles/variables';
import { Platform } from 'react-native';
const TabPlayerRoutes = TabNavigator({
  Home: { screen: HomeScreen, navigationOptions: { header: null, headerMode: 'screen' } },
  Leaderboards: { screen: LeaderboardsScreen, navigationOptions: { header: null, headerMode: 'screen' } },
  Profile: { screen: ProfileScreen, navigationOptions: { header: null, headerMode: 'screen' } }
},{
    swipeEnabled: true,
    lazy: false,
    tabBarOptions: {
      //activeTintColor: vars.colorPrimary,  // Color of tab when pressed
      activeTintColor: '#FDC326',
      //inactiveTintColor: '#b5b5b5', // Color of tab when not pressed
      inactiveTintColor: 'gray',
      showIcon: 'true', // Shows an icon for both iOS and Android
      showLabel: (Platform.OS !== 'android'), //No label for Android
      showLabel: (Platform.OS !== 'ios'),
      style: {
        backgroundColor: '#fff', // Makes Android tab bar white instead of standard blue
        height: (Platform.OS === 'ios') ? 40 : 50,
        padding: (Platform.OS === 'ios') ? 10 : 5
      }
    },
    tabBarPosition: Platform.OS === 'android' ? 'bottom' : 'bottom'
  }
)

export default TabPlayerRoutes;
