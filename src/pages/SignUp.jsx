import React from 'react';
import { Link } from 'react-router-dom';

function RegisterClick() {
    console.log("Register knop ingedrukt")
}

function SignUp() {
  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form>
          <label htmlFor="user-UserName-Field">Username</label>
          <input type="email" id="user-UserName-Field"/>

          <label htmlFor="user-Email-Field">Email</label>
          <input type="email" id="user-Email-Field"/>

          <label htmlFor="user-UserName-Password">Wachtwoord</label>
          <input type="password" id="user-UserName-Password"/>

          <button onClick={RegisterClick} type="submit">Registreren</button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;