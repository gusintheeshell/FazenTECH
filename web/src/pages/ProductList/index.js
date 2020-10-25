import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.png';
import api from '../../services/api';
import AuthContext from '../../contexts/auth';

export default function ProductList(){
    const [products, setProducts] = useState([]);
    const { logout } = useContext(AuthContext);

    const history = useHistory();

    async function getProducts(){
        await api.get('produtos').then((response) => {
            setProducts(response.data.response);
        });
    }

    useEffect(() => {
        getProducts();
    }, []);

    function handleLogout(){
        logout();
        history.push('/');
    }

    return(
        <div className="product-container">
            <header>
                <img src={logo} alt="FazenTECH" />
                <span>Bem vindo</span>
                <Link className="button" to="/add-product">Cadastrar novo produto</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#2BDA8E" />
                </button>
            </header>

            <h1>Produtos</h1>

            <ul>
                {products.map((product, index) => (
                <li key={product.id}>
                    <strong>PRODUTO:</strong>
                    <p>{product.nome}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{product.descricao}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(product.preco)}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}