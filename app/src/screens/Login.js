import React from 'react';
import { StyleSheet } from 'react-native';

import { Button, Block, Text } from '../components';


export default class Login extends React.Component {

 static navigationOptions = {
   header : null
 }


 render(){
   return (
     <Block middle>
       <Text>Login</Text>
     </Block>
    
   );
 }
 }

const styles = StyleSheet.create({

});