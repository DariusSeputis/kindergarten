import React from 'react';
import LogoLink from '../../molecules/LogoLink/LogoLink';
import Nav from '../../molecules/nav/Nav';
import { StyledNavBar } from './NavBar.style';

const NavBar = () => {
  return (
    <StyledNavBar>
      <LogoLink />
      <Nav />
    </StyledNavBar>
  );
};

export default NavBar;
