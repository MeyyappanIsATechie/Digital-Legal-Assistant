import React, { useState } from 'react';
import styled from 'styled-components';
import './SignUp.css';

const SignUpContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background: linear-gradient(135deg, #e0c3fc, #8ec5fc);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const SignUpTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const SignUpForm = styled.form`
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
  width: 100%;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

const Select = styled.select`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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

const ResetButton = styled.button`
  padding: 12px 24px;
  background-color: #ccc;
  color: #333;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #999;
  }
`;

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [mobile, setMobile] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaVerification, setCaptchaVerification] = useState('');
  
  // Add logic for captcha generation here

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleMobileChange = (event) => {
    // Limit to 10 numbers and allow only digits
    setMobile(event.target.value.replace(/[^0-9]/g, '').slice(0, 10));
  };

  const handleAadharChange = (event) => {
    // Limit to 12 numbers and allow only digits
    setAadhar(event.target.value.replace(/[^0-9]/g, '').slice(0, 12));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCaptchaChange = (event) => {
    setCaptchaVerification(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your sign-up logic here
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setDistrict('');
    setState('');
    setMobile('');
    setAadhar('');
    setPassword('');
    setConfirmPassword('');
    setCaptchaVerification('');
    // Reset captcha
  };

  return (
    <SignUpContainer>
      <SignUpTitle>Registration</SignUpTitle>
      <SignUpForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="fullName">Full Name:</Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="district">District:</Label>
          <Input
            type="text"
            id="district"
            value={district}
            onChange={handleDistrictChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="state">State:</Label>
          <Select id="state" value={state} onChange={handleStateChange} required>
            <option value="">Select State</option>
            {/* Add options for 28 states and 8 UTs of India */}
            {/* For brevity, I'll add only a few */}
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            {/* Add more options here */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="mobile">Mobile Number:</Label>
          <Input
            type="text"
            id="mobile"
            value={mobile}
            onChange={handleMobileChange}
            maxLength={10}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="aadhar">Aadhar Number:</Label>
          <Input
            type="text"
            id="aadhar"
            value={aadhar}
            onChange={handleAadharChange}
            maxLength={12}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="confirmPassword">Confirm Password:</Label>
          <Input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </FormGroup>
        <FormGroup>
          {/* Display auto-generated captcha */}
          {/* Verification of captcha */}
          <Label htmlFor="captcha">Captcha:</Label>
          <div>
            {/* Display captcha here */}
          </div>
          <Input
            type="text"
            id="captcha"
            value={captchaVerification}
            onChange={handleCaptchaChange}
            required
          />
        </FormGroup>
        <ButtonContainer>
          <SubmitButton type="submit">Sign Up</SubmitButton>
          <ResetButton type="button" onClick={handleReset}>
            Reset
          </ResetButton>
        </ButtonContainer>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;

