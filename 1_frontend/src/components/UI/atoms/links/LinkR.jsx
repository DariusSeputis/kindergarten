import React from 'react';
import { StyledLinkR } from './LinkR.style';

const LinkR = ({ to, children, action }) => {
  return (
    <StyledLinkR to={to} onClick={action}>
      {children}
    </StyledLinkR>
  );
};

export default LinkR;
