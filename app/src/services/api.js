import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.82:3333/',
  // baseURL: 'http://testetrabalhofacul-com-br.umbler.net/',
  headers: {
    'Content-Type': 'application/json ',
    Accept: 'application/json',
    'Access-Control-Origin': '*',
  },
});

export default api;
