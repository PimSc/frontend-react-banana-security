import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from "../context/AuthContext";

    function SignIn() {
        const authContext = useContext(AuthContext);

        const handleSubmit = (e) => {
            e.preventDefault();
            // Hier word het email adres opgehaald uit het formulier en meegegeven aan de login functie
            const email = document.getElementById('user-Email-Field').value;
            authContext.LogIn(email);
        };

    return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

        <form onSubmit={handleSubmit}>

            <label htmlFor="user-Email-Field">Email</label>
            <input type="email" id="user-Email-Field"/>

            <label htmlFor="user-UserName-Password">Wachtwoord</label>
            <input type="password" id="user-UserName-Password"/>

            <button type="submit">Inloggen</button>
        </form>


      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;