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
    const [error, setError] = useState("");

    const signup = (data)=>{
        setLoading(true);

        if(data){
            const newUser = {
                id: uuidv4(),
                createdAt: new Date().getTime, 
                ...data, 
            }
            setTimeout(()=>{
                database.users.push(newUser);
                setUser(newUser);
                setLoading(false);
            }, 500)
        }
    }

    const login = ({email, password})=>{
        setLoading(true);
        let output;

        setTimeout(()=>{
            if(email && password){
                output = database.users.find(user=> user.email === email && user.password === password);
            }
            if(output){
                setLoading(false);
                setUser(output);
            }else{
                setError("User does not exist");
                setLoading(false);
            }
        }, 500)
    }

    const logout = ()=>{
        setUser(null);
    }
    
    return (
        <AuthContext.Provider value={{user, error, loading, signup, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}