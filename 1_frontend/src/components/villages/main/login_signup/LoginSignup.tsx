import React from 'react';
import { Outlet } from 'react-router-dom';
import LinkR from '../../../UI/atoms/links/LinkR';
import LoginForm from '../../../UI/organisms/forms/LoginForm';
import SignupForm from '../../../UI/organisms/forms/SignupForm';
import { StyledLoginSignup } from './LoginSignup.style';

const LoginSignup: React.FC = () => {
  return (
    <StyledLoginSignup>
      <h3>Prisijungti</h3>
      <LoginForm />
      <br />
      <hr />
      <br />
      <h3>Sukurti nauja paskyra</h3>
      <SignupForm />
      <LinkR to='/loginSignup/Vyturiukai'>Vyturiukai</LinkR>
      <Outlet />
    </StyledLoginSignup>
  );
};

export default LoginSignup;
