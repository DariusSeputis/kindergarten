import React from 'react';
import { StyledLabel } from './Label.style';

const Label = ({ forProp, text }) => {
  return <StyledLabel htmlFor={forProp}>{text}</StyledLabel>;
};

export default Label;
