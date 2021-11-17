import styled from 'styled-components';

export const StyledNav = styled.nav``;

export const StyledDropDown = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1rem;

  position: absolute;
  left: 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    position: static;
    gap: 1rem;
  }
`;

export const StyledNavLinkWrapper = styled.div`
  background-color: var(--navPrimary-color);

  border-bottom: 1px solid var(--navSecondary-color);

  font-size: 2em;
  font-weight: 600;

  color: var(--navSecondary-color);

  height: 3rem;
  width: 100vw;

  z-index: 1;

  &:hover {
    background-color: var(--navSecondary-color);
    color: var(--navPrimary-color);
  }

  @media screen and (min-width: 768px) {
    border: none;

    height: auto;

    font-size: 1.5em;

    width: fit-content;
  }
`;
