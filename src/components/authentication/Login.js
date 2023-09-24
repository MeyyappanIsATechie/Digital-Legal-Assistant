import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const ForgotPasswordButton = styled.button`
  margin-top: 10px;
  padding: 8px;
  color: #007BFF;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
`;

const SocialLoginButtons = styled.div`
  margin-top: 20px;
  button {
    margin-right: 10px;
    padding: 12px 24px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  button:hover {
    opacity: 0.8;
  }
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', { username, password });
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google clicked');
  };

  const handleFacebookLogin = () => {
    console.log('Login with Facebook clicked');
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username/Email:</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormGroup>
        <SubmitButton type="submit">Login</SubmitButton>
      </LoginForm>

      <ForgotPasswordButton onClick={handleForgotPassword}>
        Forgot Password?
      </ForgotPasswordButton>

      <SocialLoginButtons>
        <button onClick={handleGoogleLogin}>Login with Google</button>
        <button onClick={handleFacebookLogin}>Login with Facebook</button>
      </SocialLoginButtons>
    </LoginContainer>
  );
};

export default Login;
