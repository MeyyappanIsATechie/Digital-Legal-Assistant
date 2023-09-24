import React from 'react';
import './AuthenticationPage.css';

const AuthenticationPage = ({ handleLoginClick, handleSignUpClick }) => {
  return (
    <div className="AuthenticationPage">
      <h2>Login or Sign Up</h2>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleSignUpClick}>Sign Up</button>
    </div>
  );
};

export default AuthenticationPage;
