import React from 'react';
import { StyledLinkS } from './LinkS.style';

interface Props {
  to: string;
  action: () => void;
}

const LinkS: React.FC<Props> = ({ to, children, action }) => {
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
