import React, { useState, useContext, useEffect } from 'react';
import database from '../sampleDb';

const ProductsContext = React.createContext();

export function useProducts() {
    return useContext(ProductsContext);
}

export function ProductsProvider({ children }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(database.products)
    }, [database.products]);

    const getProduct = (id)=> data.find((product)=> product.id === id);

    return (
        <ProductsContext.Provider value={{data, getProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}