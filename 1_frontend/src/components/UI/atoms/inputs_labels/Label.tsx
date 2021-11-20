import React from 'react';
import { StyledLabel } from './Label.style';

interface Props {
  forProp: string;
  text: string;
}

const Label: React.FC<Props> = ({ forProp, text }) => {
  return <StyledLabel htmlFor={forProp}>{text}</StyledLabel>;
};

export default Label;
