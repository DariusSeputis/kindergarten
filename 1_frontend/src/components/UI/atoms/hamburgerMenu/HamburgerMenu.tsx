import React from 'react';
import { StyledHamburgerMenu } from './HamburgerMenu.style';
import { FaBars } from 'react-icons/fa';

const HamburgerMenu: React.FC<{
  action: () => void;
  // onClick: React.MouseEventHandler<HTMLElement>;
}> = ({ action }) => {
  return (
    <StyledHamburgerMenu onClick={action}>
      <FaBars />
    </StyledHamburgerMenu>
  );
};

export default HamburgerMenu;
