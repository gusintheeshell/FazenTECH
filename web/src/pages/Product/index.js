import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.png';

export default function Product(){
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [foto, setFoto] = useState(undefined);

    async function handleAddProduct(e){
        e.preventDefault();

        const data = {
            nome,
            preco,
            descricao,
            foto,
        };

        try{
            await api.post('produtos', data);

            alert('Cadastro realizado.');
        }catch(error){
            alert('Erro no cadastro, tente novamente.');
            console.log(error.response);
        }
    }

    return(
        <div className="add-product-container">
            <div className="content">
                <section>
                    <img src={logo} alt="FazenTECH" />

                    <h1>Cadastrar novo produto</h1>
                    <p>Descreva o produto detalhadamente para encontrar um cliente para comprar.</p>

                    <Link className="back-link" to="/products">
                        <FiArrowLeft size={16} color="#2BDA8E" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleAddProduct}>
                    <input 
                        placeholder="Nome do produto" 
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input
                        placeholder="Preço" 
                        value={preco}
                        onChange={e => setPreco(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição" 
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                    <input
                        placeholder="Imagem"
                        type="file"
                        value={foto}
                        onChange={e => setFoto(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}