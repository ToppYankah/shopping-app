import React, { useState, useContext, useEffect } from 'react';
import database from '../sampleDb';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const signup = (data)=>{
        const newUser = {
            id: uuidv4(),
            createdAt: new Date().getTime, 
            ...data, 
        }

        if(data){
            database.users.push(newUser);
            setUser(newUser);
        }
    }

    const login = ({email, password})=>{
        setLoading(true);

        setTimeout(()=>{
            let output;
            if(email && password){
                otuput = database.users.find(user=> user.email === email && user.password === password);
            }
        }, 500)
        return output;
    }

    const logout = ()=>{
        setUser(null);
    }
    
    return (
        <AuthContext.Provider value={{user, loading, signup, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}