import styled from 'styled-components';
import { NavLink as LinkR } from 'react-router-dom';

export const StyledLinkR = styled(LinkR)`
  cursor: pointer;

  color: var(--navSecondary-color);

  text-decoration: none;

  text-align: center;

  display: inline-block;

  height: 100%;

  width: 100%;
  &:hover {
    background-color: var(--navSecondary-color);
    color: var(--navPrimary-color);
  }
`;
