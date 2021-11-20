import React from 'react';
import { StyledLogoLink } from './LogoLink.style';
// import { useLocation } from 'react-router-dom';

import Logo from '../../atoms/logo/Logo';
import LinkR from '../../atoms/links/LinkR';

const LogoLink = () => {
  return (
    <StyledLogoLink>
      <LinkR to='/'>
        <Logo />
      </LinkR>
    </StyledLogoLink>
  );
};

export default LogoLink;
