import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

const AuthContext = createContext({
  signed: false,
  nome: '',
  email: '',
});

export const AuthProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function loadStorageData() {
      const nomeUsuario = await AsyncStorage.getItem('nome');
      const emailUsuario = await AsyncStorage.getItem('email');

      if (nomeUsuario) {
        setSigned(true);
        setNome(nomeUsuario);
        setEmail(emailUsuario);
      }
    }
    loadStorageData();
  }, []);

  async function login(email, senha) {
    const response = await api.post('usuario/login', {email, senha});

    if(response.data.response !== false){
      setSigned(response.data.response);
      setNome(response.data.nome);
      setEmail(response.data.email);
  
      await AsyncStorage.setItem('nome', response.data.nome);
      await AsyncStorage.setItem('email', response.data.email);
    }

    return response;
  }

  function logout(){
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, login, logout, nome, email }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;