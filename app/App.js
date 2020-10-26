import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigation from './src/navigation';
import { Block } from './src/components';
import { AuthProvider } from './src/contexts/auth';

export default class App extends React.Component {

  render(){
    return (
      <Block white>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </Block>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});