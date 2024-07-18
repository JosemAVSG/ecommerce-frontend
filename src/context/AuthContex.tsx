'use client';
import { createContext, useReducer } from 'react';

export const AuthContext = createContext({});



export const  Contexto = ({ children }:{ children: React.ReactNode }) => {
    const initialState = {
        user: null,
    }
    // const userdata = localStorage.getItem('userdata');
    // if (userdata) {
    //     initialState.user = JSON.parse(userdata);
    // }
    const reducer = (state: any, action: any) => {

        switch (action.type) {
            case 'LOGIN':
                return { 
                    ...state, 
                    user: action.payload
                };
            case 'LOGOUT':
                return { ...state, user: null };
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);


    

    return (
        
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    );
}