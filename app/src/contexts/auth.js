import React, { createContext, useState } from 'react';

import api from '../services/api';

const AuthContext = createContext({
  signed: false,
});

export const AuthProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);

  async function login(email, senha) {
    await api.post('/usuario/login', {email, senha});
    setSigned(true);
  }

  function logout(){
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;