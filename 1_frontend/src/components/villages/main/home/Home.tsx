import React from 'react';
import Hero from '../../../UI/molecules/Hero/Hero';
import { StyledHomePage, StyledtestDiv } from './Home.style';

const HomePage: React.FC = () => {
  return (
    <StyledHomePage>
      <Hero />
      <StyledtestDiv id='testas' />
    </StyledHomePage>
  );
};

export default HomePage;
