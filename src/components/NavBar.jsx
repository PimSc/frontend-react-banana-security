import logo from '../assets/banana-01.png';
import {Link, useNavigate} from 'react-router-dom';
import AuthContext from "./../context/AuthContext";
import React, {useContext} from 'react';

function NavBar() {
  const navigate = useNavigate();
  const { LogOut, isAuth } = useContext(AuthContext);
    const authContext = useContext(AuthContext);

  return (
      <nav>
        <Link to="/">
        <span className="logo-container">
          <img src={logo} alt="logo" />
          <h3>Banana Security</h3>
        </span>
        </Link>

        <div>
            {!isAuth ? (<>
                    {/*De inhoud van deze !isAuth is alleen zichtbaar als de gebruiker is ingelogd.*/}
                    <button
                        type="button"
                        onClick={() => navigate('/signin')}
                    >
                        Log in
                    </button>
              <button
                  type="button"
                  onClick={() => navigate('/signup')}
              >
                  Registreren
              </button>
                </>
          ) : (
              <>
                  {/*De inhoud van deze !isAuth is alleen zichtbaar als de gebruiker is uitgelogd.*/}
                <span>Welkom, {authContext.user}!</span>
                <button
                    type="button"
                    onClick={() => {
                      LogOut();
                    }}
                >
                  Uitloggen
                </button>
              </>
          )}

        </div>
      </nav>
  );
}

export default NavBar;