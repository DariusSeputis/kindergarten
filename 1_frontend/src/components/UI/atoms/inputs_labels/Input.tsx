import React from 'react';
import { StyledInput } from './Input.style';

interface Props {
  type: string;
  multiple?: boolean;
  action?: React.ChangeEventHandler<HTMLInputElement>;
  pHolder?: string;
  id?: string;
  value?: string;
  reference?: React.RefObject<HTMLInputElement>;
}

const Input: React.FC<Props> = ({
  type,
  action,
  pHolder,
  id,
  value,
  reference,
  multiple,
}) => {
  return (
    <StyledInput
      onChange={action}
      ref={reference}
      type={type}
      placeholder={pHolder}
      id={id}
      value={value}
      multiple={multiple}
    />
  );
};

export default Input;
