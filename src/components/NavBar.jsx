import logo from '../assets/banana-01.png';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from "./../context/AuthContext";
import React, { useEffect, useState, useContext } from 'react';

function NavBar() {
  const navigate = useNavigate();
  const { LogIn, LogOut, isAuth, username } = useContext(AuthContext);

  return (
      <nav>
        <Link to="/">
        <span className="logo-container">
          <img src={logo} alt="logo" />
          <h3>Banana Security</h3>
        </span>
        </Link>

        <div>
          {!isAuth ? (
              <button
                  type="button"
                  onClick={() => {
                    LogIn();
                    console.log(isAuth)
                  }}
              >
                Log in
              </button>
          ) : (
              <>
                <span>Welkom, {username}!</span>
                <button
                    type="button"
                    onClick={() => {
                      LogOut();
                      console.log(isAuth)
                    }}
                >
                  Uitloggen
                </button>
              </>
          )}
          <button
              type="button"
              onClick={() => navigate('/signup')}
          >
            Registreren
          </button>
        </div>
      </nav>
  );
}

export default NavBar;