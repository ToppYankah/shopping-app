import React, { useState, useContext, useEffect } from 'react';
import database from '../sampleDb';

const CartContext = React.createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(database.cart)
    }, [database.cart]);

    return (
        <CartContext.Provider value={{data}}>
            {children}
        </CartContext.Provider>
    )
}