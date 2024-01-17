import React, {createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    // HIER IMPLEMENTEREN WE ONZE AUTH LOGICA
    const [isAuth, toggleAuth] = useState(false);

    const navigate = useNavigate();

    function logOut() {
        toggleAuth(false)
        console.log("uitgelogd")
        navigate('/');
    }

    function logIn() {
        toggleAuth(true)
        console.log("ingelogd")
        navigate('/profile');
    }

// DIT IS ONS DATA OBJECT
    const data = {
        username: 'Reza',
        LogIn: logIn,
        LogOut: logOut,
        isAuth: isAuth,
    };

    //DIT STUREN WE MEE VIA DE PROVIDER
    return (
        <AuthContext.Provider value={ data }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

