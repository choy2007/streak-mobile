import { TabNavigator, DrawerNavigator } from 'react-navigation';
import HomeScreen from '../screens/Player/HomeScreen';
import ProfileScreen from '../screens/Player/ProfileScreen';
import vars from '../styles/variables';

const TabPlayerRoutes = TabNavigator({
  Home: { screen: HomeScreen, navigationOptions: { header: null, headerMode: 'screen' } },
  Profile: { screen: ProfileScreen, navigationOptions: { header: null, headerMode: 'screen' } }
},{
    swipeEnabled: true,
    lazy: false,
    tabBarOptions: {
      activeTintColor: vars.colorPrimary,
      inactiveTintColor: 'gray',
    },
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
