import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
// import Forgot from '../screens/Forgot';
// import Explore from '../screens/Explore';
// import Browse from '../screens/Browse';
// import Product from '../screens/Product';
// import Settings from '../screens/Settings';


const screens = createStackNavigator({
  Welcome,
  Login,
  SignUp,
  // Forgot,
  // Explore,
  // Browse,
  // Product,
  // Settings,
}, {
  defaultNavigationOptions: {
    headerShown: false,
    headerStyle: {},
    headerBackImage: <Image/>,
    headerBackTitle: null,
    headerLeftContainerStyle: {},
    headerRightContainerStyle: {},
  }
});

export default createAppContainer(screens);