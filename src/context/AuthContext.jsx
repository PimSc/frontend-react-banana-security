import React, {createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    // HIER IMPLEMENTEREN WE ONZE AUTH LOGICA
    // const [isAuth, toggleIsAuth] = useState(false);
    const navigate = useNavigate();
    const [authState, setAuthState] = useState({ isAuth: false, user: '' });



    const logIn = (email) => {
        // Zet de isAuth op true en de user op het emailadres
        setAuthState({isAuth: true, user: email});

        console.log("Gebruiker is ingelogd!");
        navigate('/profile');
    };

    const logOut = () => {
        // Zet de isAuth op false en de user op een lege string
        setAuthState({ isAuth: false, user: '' });

        console.log("Gebruiker is uitgelogd!");
        navigate('/');
    };


// DIT IS ONS DATA OBJECT
    const data = {
        LogIn: logIn,
        LogOut: logOut,
        isAuth: authState.isAuth,
        user: authState.user,
        // username: 'Reza',
        // isAuth: isAuth,
    };

    //DIT STUREN WE MEE VIA DE PROVIDER
    return (
        <AuthContext.Provider value={ data }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

