import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import { theme } from '../constants';
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
    headerTitle: null,
    headerStyle: {
      height:theme.sizes.base * 4,
      backgroundColor: theme.colors.white,
      borderBottomColor: "transparent",
      elevation: 0,
    },
    headerBackImage: <Image source={require('../assets/icons/back.png')}/>,
    headerBackTitleVisible: false,
    headerLeftContainerStyle: {
      alignItems: 'center',
      marginLeft: theme.sizes.base,
      paddingRight: theme.sizes.base,
    },
    headerRightContainerStyle: {
      alignItems: 'center',
      paddingRight: theme.sizes.base,
    },
  }
});

export default createAppContainer(screens);