import React, { useState, useContext, useEffect } from 'react';
import database from '../sampleDb';

const AuthContext = React.createContext();

export function useCart() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}