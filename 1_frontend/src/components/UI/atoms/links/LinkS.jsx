import React from 'react';
import { StyledLinkS } from './LinkS.style';

const LinkS = ({ to, children, action }) => {
  return (
    <StyledLinkS
      offset={-78}
      to={to}
      onClick={action}
      smooth={true}
      duration={1000}
    >
      {children}
    </StyledLinkS>
  );
};

export default LinkS;
