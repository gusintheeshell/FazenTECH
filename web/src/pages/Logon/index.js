import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import draw from '../../assets/Asset 11.svg';
import logo from '../../assets/logo.png';

export default function Login(){
    return(
        <div className="logon-container">
            <section className="form">
            <img src={logo} alt="Be The Hero" />
                <form>
                    <h1>Faça seu login</h1>
                    <input 
                        placeholder="E-mail"
                    />
                    <input 
                        placeholder="Senha"
                    />
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