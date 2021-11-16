import React, { useState, useContext, useEffect } from 'react';
import database from '../sampleDb';
import { useAuth } from './auth';

const FavoriteContext = React.createContext();

export function useFavorite() {
    return useContext(FavoriteContext);
}

export function FavoriteProvider({ children }) {
    const [data, setData] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        setData(user && database.favorites[user.id] || []);
    }, [database.favorites]);

    const addToFavorites = (item)=>{
        if(item) setData([...data, item]);
    }

    const removeFromFavorites = (id)=>{
        const filter = data.filter(item=> item !== id);
        setData(filter.map(i=> i));
    }

    return (
        <FavoriteContext.Provider value={{data, addToFavorites, removeFromFavorites}}>
            {children}
        </FavoriteContext.Provider>
    )
}