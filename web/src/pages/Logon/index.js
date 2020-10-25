import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { FaEye } from 'react-icons/fa';

import AuthContext from '../../contexts/auth';

import './styles.css';

import draw from '../../assets/Asset 11.svg';
import logo from '../../assets/logo.png';

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { login } = useContext(AuthContext);
    const [passwordShow, setPasswordShown] = useState(false);
    const history = useHistory();

    const tooglePasswordVisibility = () => {
        setPasswordShown(passwordShow ? false : true);
    }

    async function handleLogin(e){
        e.preventDefault();

        const data = {
            email,
            senha,
        }

        try{
            await login(data);

            history.push('/products');
        }catch(error){
            alert('Falha no login, tente novamente.');
            console.log(error.response);
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
            <img src={logo} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type={passwordShow ? "text" : "password"}
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                        
                    <i onClick={tooglePasswordVisibility}><FaEye size={16} color="#000" /></i>
                    
                    <button className="button">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#2BDA8E" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={draw} alt="FazenTECH" width="600px"/>
        </div>
    )
}