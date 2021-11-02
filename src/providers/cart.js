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

    const addItem = (item)=>{
        if(item){
            data.unshift({id: data.length + 1, ...item, select: true});
        }
    }

    const removeItem = (id)=>{
        const filter = data.filter(item=> item.id !== id);
        setData(filter.map(i=> i));
    }

    const updateItem = (id, query) => {
        if(id && query){
            setData(
                data.map(item=> {
                    if(item.id === id){
                        return {...item, ...query}
                    }
                    return item;
                })
            );
        }
    }

    return (
        <CartContext.Provider value={{data, addItem, removeItem, updateItem}}>
            {children}
        </CartContext.Provider>
    )
}