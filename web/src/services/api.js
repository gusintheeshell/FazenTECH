import axios from 'axios';

const api = axios.create({
    baseURL: 'http://testetrabalhofacul-com-br.umbler.net/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'OPTIONS',
});

export default api;