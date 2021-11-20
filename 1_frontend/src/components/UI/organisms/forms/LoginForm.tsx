import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import useEndpoints from '../../../../hooks/useEndpoints';
import Input from '../../atoms/inputs_labels/Input';
import Label from '../../atoms/inputs_labels/Label';
import { StyledForm, StyledLabelInputWrapper } from './Form.style';

const LoginForm: React.FC = () => {
  // Hooks
  // - State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState({ fullName: '' });
  const [loading, setLoading] = useState(true);

  // - Side effects
  const loginURI = useEndpoints('login');

  // Custom function
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post(loginURI, { email, password })
      .then((res: AxiosResponse<any>) => {
        setUserData(res.data.user);
        localStorage.setItem('user', res.data.token);
      })
      .catch((err) => setMessage(err.response.data))
      .finally(() => setLoading(false));
  };
  return (
    <StyledForm onSubmit={(e) => formSubmitHandler(e)}>
      <StyledLabelInputWrapper>
        <Label forProp='emailLogin' text='El.paštas' />
        <Input
          type='text'
          pHolder='abc@abc.ab'
          id='emailLogin'
          action={(e) => setEmail(e.target.value)}
          value={email}
        />
      </StyledLabelInputWrapper>
      <StyledLabelInputWrapper>
        <Label forProp='passwordLogin' text='Slaptažodis' />
        <Input
          type='password'
          pHolder=''
          id='passwordLogin'
          action={(e) => setPassword(e.target.value)}
          value={password}
        />
      </StyledLabelInputWrapper>
      <StyledLabelInputWrapper>
        <Input type='submit' value='Prisijungti' />
      </StyledLabelInputWrapper>
      {message && <p>{message}</p>}
      {!loading && <p>{userData.fullName}</p>}
    </StyledForm>
  );
};

export default LoginForm;
