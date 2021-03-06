import React from 'react';
import { StyledLogo } from './Logo.style';
import logoImg from '../../../../images/logo_vaiko_sparnai.gif';

const Logo: React.FC = () => {
  return <StyledLogo src={logoImg} alt='Vaiko Sparnai' />;
};

export default Logo;
