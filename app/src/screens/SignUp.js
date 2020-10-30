import React from 'react';
import { Alert, ActivityIndicator, Keyboard, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

import { Button, Block, Input, Text } from '../components';
import { theme } from '../constants';

import api from '../services/api';


export default class SignUp extends React.Component {

 static navigationOptions = {
 }
 
 state = {
  nome: null,
  email: null,
  senha: null,
  errors: [],
  loading: false,
}

async handleCallApi(){
  const { nome, email, senha } = this.state;

  try{
    await api.post('usuario', { nome, email, senha });
  } catch(error){
    alert('Erro no cadastro, tente novamente.');
    console.log(error.response);
  }
}

handleSignUp() {
  const { navigation } = this.props;
  const { nome, email, senha } = this.state;
  const errors = [];

  Keyboard.dismiss();
  this.setState({ loading: true });

  // check with backend API or with some static data
  if (!email) errors.push('email');
  if (!nome) errors.push('nome');
  if (!senha) errors.push('senha');
  this.handleCallApi();

  this.setState({ errors, loading: false });

  if (!errors.length) {
    Alert.alert(
      'Sucesso!',
      'Sua conta foi criada.',
      [
        {
          text: 'Continue', onPress: () => {
            navigation.navigate('Login')
          }
        }
      ],
      { cancelable: false }
    )
  }
}

 render(){
  const { navigation } = this.props;
  const { loading, errors } = this.state;
  const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;
   return (
     <KeyboardAvoidingView 
      style={styles.signup} 
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
       <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>Cadastrar</Text>
        <Block middle>
          <Input 
            email
            label="Email"
            style={[styles.input, hasErrors('email')]}
            defaultValue={this.state.email}
            onChangeText={text => this.setState({ email: text})}
          />
          <Input 
            label="Nome"
            style={[styles.input, hasErrors('nome')]}
            defaultValue={this.state.nome}
            onChangeText={text => this.setState({ nome: text })}
          />
          <Input 
            secure
            label="Senha"
            style={[styles.input, hasErrors('senha')]}
            defaultValue={this.state.senha}
            onChangeText={text => this.setState({ senha: text })}
          />
          <Button gradient onPress={() => {this.handleSignUp()}}>
            {this.state.loading ?
              <ActivityIndicator size="small" color="white" /> :
              <Text bold white center>Cadastrar</Text>
            }
          </Button>
          <Button onPress={() => navigation.navigate('Welcome')} style={{ backgroundColor: 'transparent'}}>
            <Text gray caption center style={{ textDecorationLine: 'underline' }}>
              Já tem cadastro? Entre aqui.
            </Text>
          </Button>
        </Block>
       </Block>
     </KeyboardAvoidingView>
   );
 }
 }

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});