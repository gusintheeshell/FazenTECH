import React, { createContext, useState, useContext, useEffect } from 'react';
import { ToastAndroid } from 'react-native'

const CartContext = createContext();

export default function CarProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [totalValue, setTotalValue] = useState();

    const showToastWithGravity = (nome) => {
        ToastAndroid.showWithGravity(
          `${nome} adicionado ao carrinho.`,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
    };

    useEffect(() => {
        let value = 0;
        cart.map((item) => {
            value = value + item.preco;
        });

        setTotalValue(value);
    }, [cart]);

    function add(item){
        const newCart = cart;
        newCart.push(item);
        setCart([...newCart]);
        showToastWithGravity(item.nome);
    }

    function remove(index){
        let newCart = cart.filter((item, i) => i !== index);

        setCart([...newCart]);

    }

    const store = {
        add,
        remove,
        cart,
        totalValue,
    }

    return (
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const context = useContext(CartContext);

    const {
        cart,
        add,
        remove,
        totalValue,
    } = context;

    return {
        cart,
        add,
        remove,
        totalValue,
    }
}
