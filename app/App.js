import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import Routes from './src/navigation';
import {Block} from './src/components';
import {AuthProvider} from './src/contexts/auth';
import CartProvider from './src/contexts/cart';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Block white>
      <AuthProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </AuthProvider>
    </Block>
  );
}
