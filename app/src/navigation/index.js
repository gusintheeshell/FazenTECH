import React, {useContext} from 'react';
import {Image} from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import ShoppingCartIcon from '../screens/cart/components/ShoppingCarIcon';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Cart from '../screens/cart/Produtos';
import Checkout from '../screens/cart/Checkout';
import AuthContext from '../contexts/auth';

export default function Routes() {
  const {signed} = useContext(AuthContext);
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {signed === false ? (
          <>
            <AppStack.Screen
              name="Welcome"
              component={Welcome}
              options={{
                headerShown: false,
              }}
            />
            <AppStack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <AppStack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <>
            <AppStack.Screen
              name="Cart"
              component={Cart}
              options={{
                headerRight: (props) => <ShoppingCartIcon />,
                headerLeft: false,
                headerTitle: false,
              }}
            />
            <AppStack.Screen name="Checkout" component={Checkout} />
          </>
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
