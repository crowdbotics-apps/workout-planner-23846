import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList193175Navigator from '../features/NotificationList193175/navigator';
import Settings193174Navigator from '../features/Settings193174/navigator';
import Settings193166Navigator from '../features/Settings193166/navigator';
import UserProfile193164Navigator from '../features/UserProfile193164/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList193175: { screen: NotificationList193175Navigator },
Settings193174: { screen: Settings193174Navigator },
Settings193166: { screen: Settings193166Navigator },
UserProfile193164: { screen: UserProfile193164Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
