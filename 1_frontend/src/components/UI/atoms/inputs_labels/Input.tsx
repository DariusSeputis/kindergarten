import React from 'react';
import { StyledInput } from './Input.style';

interface Props {
  type: string;
  action?: () => void;
  pHolder?: string;
  id?: string;
  value?: string;
  reference?: () => void;
}

const Input: React.FC<Props> = ({
  type,
  action,
  pHolder,
  id,
  value,
  reference,
}) => {
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
