import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.png';

export default function Register(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            email,
            nome,
            senha,
        };

        try{
            const response = await api.post('usuario', data);
            
            console.log(response);
            console.log(data);

            alert(`${response.data.mensagem}`);
            history.push('/');
        }catch(error){
            alert('Erro no cadastro, tente novamente.');
            console.log(error.response);
            console.log(typeof(data));
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="FazenTECH" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro para ajudar o agro-negócio local</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#2BDA8E" />
                        Já tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />

                    <input 
                        placeholder="E-mail"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                        placeholder="Senha"
                        type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}