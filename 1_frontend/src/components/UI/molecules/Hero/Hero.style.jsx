import styled from 'styled-components';

export const StyledHero = styled.div`
  position: relative;

  width: 100vw;
  z-index: -1;
`;

export const StyledHeroImg = styled.img`
  width: 100%;
`;

export const StyledHeroSpan = styled.span`
  color: var(--navSecondary-color);

  position: absolute;
  left: 10%;
  top: 10%;

  font-size: 1em;
  font-weight: 600;

  width: 30%;

  @media screen and (min-width: 400px) {
    font-size: 1.5em;
  }
  @media screen and (min-width: 500px) {
    font-size: 1.8em;
  }
  @media screen and (min-width: 500px) {
    font-size: 1.8em;
  }
  @media screen and (min-width: 600px) {
    font-size: 2.2em;
    top: 20%;
  }
  @media screen and (min-width: 800px) {
    font-size: 2.6em;
  }
  @media screen and (min-width: 1000px) {
    font-size: 3.5em;
  }
  @media screen and (min-width: 1400px) {
    font-size: 5em;
  }
`;
