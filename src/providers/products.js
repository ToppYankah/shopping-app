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

    return (
        <ProductsContext.Provider value={{data}}>
            {children}
        </ProductsContext.Provider>
    )
}