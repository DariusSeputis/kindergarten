import React from 'react';
import { StyledInput } from './Input.style';

const Input = ({ type, action, pHolder, id, value, reference }) => {
  return (
    <StyledInput
      onChange={action}
      ref={reference}
      type={type}
      placeholder={pHolder}
      id={id}
      value={value}
    />
  );
};

export default Input;
