import React, { useContext } from 'react';
import { Image } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import ShoppingCartIcon from '../screens/cart/components/ShoppingCarIcon';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import { theme } from '../constants';
// import Forgot from '../screens/Forgot';
// import Explore from '../screens/Explore';
import Browse from '../screens/Browse';
// import Product from '../screens/Product';
// import Settings from '../screens/Settings';
import Cart from '../screens/cart/Produtos';
import Checkout from '../screens/cart/Checkout';
import AuthContext from '../contexts/auth';

export default function Routes(){
  const { signed } = useContext(AuthContext);
  return (
    <NavigationContainer>
        <AppStack.Navigator>
          {signed === false ? (
            <>
            <AppStack.Screen name="Welcome" component={Welcome} 
              options={{
                headerShown: false,
              }}
            />
            <AppStack.Screen name="Login" component={Login} />
            <AppStack.Screen name="SignUp" component={SignUp} />
            </>
          ) : (
            <>
            <AppStack.Screen name="Cart" component={Cart} 
              options={{
                headerRight: (props) => (
                  <ShoppingCartIcon />
                ),
                headerLeft: false,
                headerTitle: false,
            }}/>
            <AppStack.Screen name="Checkout" component={Checkout} />
            </>
          )}
        </AppStack.Navigator>
    </NavigationContainer>
  );
}


// const screens = createStackNavigator({
//   Welcome,
//   Login,
//   SignUp,
//   // Forgot,
//   // Explore,
//   Browse,
//   Checkout,
//   // Product,
//   // Settings,
//   Cart: {
//     screen: Cart,
//     navigationOptions: {
//       headerRight:(
//         <ShoppingCartIcon />
//       ),
//     }
//   },
// }, {
//   defaultNavigationOptions: {
//     headerTitle: null,
//     headerStyle: {
//       height:theme.sizes.base * 4,
//       backgroundColor: theme.colors.white,
//       borderBottomColor: "transparent",
//       elevation: 0,
//     },
//     headerBackImage: <Image source={require('../assets/icons/back.png')}/>,
//     headerBackTitleVisible: false,
//     headerLeftContainerStyle: {
//       alignItems: 'center',
//       marginLeft: theme.sizes.base,
//       paddingRight: theme.sizes.base,
//     },
//     headerRightContainerStyle: {
//       alignItems: 'center',
//       paddingRight: theme.sizes.base,
//     },
//   }
// });

// export default createAppContainer(screens);