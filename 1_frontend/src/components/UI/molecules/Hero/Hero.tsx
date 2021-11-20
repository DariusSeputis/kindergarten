import React from 'react';
import { StyledHero, StyledHeroImg, StyledHeroSpan } from './Hero.style';

import heroImg from '../../../../images/hero.jpg';

const Hero: React.FC = () => {
  return (
    <StyledHero id='home'>
      <StyledHeroImg src={heroImg} alt='hero' />
      <StyledHeroSpan>Super mega turbo vaikų darželis</StyledHeroSpan>
    </StyledHero>
  );
};

export default Hero;
