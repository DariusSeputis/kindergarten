import React from 'react';
import { StyledLinkR } from './LinkR.style';

interface Props {
  to: string;
  action?: () => void;
}

const LinkR: React.FC<Props> = ({ to, children, action }) => {
  return (
    <StyledLinkR to={to} onClick={action}>
      {children}
    </StyledLinkR>
  );
};

export default LinkR;
