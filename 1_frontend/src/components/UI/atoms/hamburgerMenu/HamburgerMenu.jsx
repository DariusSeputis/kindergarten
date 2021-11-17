import React from 'react';
import { StyledHamburgerMenu } from './HamburgerMenu.style';
import { FaBars } from 'react-icons/fa';

const HamburgerMenu = ({ action }) => {
  return (
    <StyledHamburgerMenu onClick={action}>
      <FaBars />
    </StyledHamburgerMenu>
  );
};

export default HamburgerMenu;
