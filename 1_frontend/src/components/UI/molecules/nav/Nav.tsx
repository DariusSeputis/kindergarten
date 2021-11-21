import React, { useState } from 'react';
import HamburgerMenu from '../../atoms/hamburgerMenu/HamburgerMenu';
import LinkR from '../../atoms/links/LinkR';
import LinkS from '../../atoms/links/LinkS';

import { StyledDropDown, StyledNav, StyledNavLinkWrapper } from './Nav.style';
import useWindowSize from '../../../../hooks/useWindowSize';
import { useLocation } from 'react-router-dom';

const Nav: React.FC = () => {
  // Hooks
  // - RRD
  const location = useLocation();
  // - State
  // -- Local
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  // - Custom hooks
  const [width] = useWindowSize();
  // Custom functions
  const hamburgerSwitch = () => setHamburgerOpen(!hamburgerOpen);

  return (
    <StyledNav>
      {width <= 768 ? <HamburgerMenu action={hamburgerSwitch} /> : null}

      {hamburgerOpen || width >= 768 ? (
        <StyledDropDown>
          {location.pathname === '/' ? (
            <>
              <StyledNavLinkWrapper>
                <LinkS to='home' action={hamburgerSwitch}>
                  Pradžia
                </LinkS>
              </StyledNavLinkWrapper>
              <StyledNavLinkWrapper>
                <LinkS to='testas' action={hamburgerSwitch}>
                  Testas
                </LinkS>
              </StyledNavLinkWrapper>
            </>
          ) : null}
          {location.pathname !== '/' ? (
            <StyledNavLinkWrapper>
              <LinkR to='/' action={hamburgerSwitch}>
                Pradžia
              </LinkR>
            </StyledNavLinkWrapper>
          ) : null}
          <StyledNavLinkWrapper>
            <LinkR to='/uploadPhoto' action={hamburgerSwitch}>
              Įkelti nuotraukas
            </LinkR>
          </StyledNavLinkWrapper>
          <StyledNavLinkWrapper>
            <LinkR to='/loginSignup' action={hamburgerSwitch}>
              Prisijungti
            </LinkR>
          </StyledNavLinkWrapper>
        </StyledDropDown>
      ) : null}
    </StyledNav>
  );
};

export default Nav;
