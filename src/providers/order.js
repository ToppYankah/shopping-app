import React, { useState, useContext, useEffect } from 'react';
import database from '../sampleDb';

const OrderContext = React.createContext();

export function useOrder() {
    return useContext(OrderContext);
}

export function OrderProvider({ children }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(database.orders)
    }, [database.orders]);

    return (
        <OrderContext.Provider value={{data}}>
            {children}
        </OrderContext.Provider>
    )
}