import React from 'react';
import NavBar from '../../UI/organisms/NavBar/NavBar';
import { StyledHeader } from './Header.style';

const Header: React.FC = () => {
  return (
    <StyledHeader id='home'>
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
