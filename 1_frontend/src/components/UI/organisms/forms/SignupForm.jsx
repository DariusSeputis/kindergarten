import axios from 'axios';
import React, { useRef, useState } from 'react';
import Input from '../../atoms/inputs_labels/Input';
import Label from '../../atoms/inputs_labels/Label';
import useEndpoints from '../../../../hooks/useEndpoints';
import { StyledForm, StyledLabelInputWrapper } from './Form.style';

const SignupForm = () => {
  // Hooks
  // - State
  const [fullName, setFullName] = useState('');
  const [childsFullName, setChildsFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  // - Ref
  const refPassword = useRef();

  // - Side effects
  const signupURI = useEndpoints('signup');

  // Custom function
  const formSubmitHandler = (e) => {
    e.preventDefault();

    // VALIDATION
    if (!fullName) {
      setMessage('Įveskite vardą ir pavardę');
      return;
    }
    if (!childsFullName) {
      setMessage('Įveskite vaiko vardą ir pavardę');
      return;
    }
    if (!email) {
      setMessage('Įveskite elektroninio pašto adresą');
      return;
    }
    if (!password) {
      setMessage(
        'Įveskite slaptažodį bent 6 simboliai iš jų bent vienas skaicius'
      );
      return;
    }
    if (!confirmPassword) {
      setMessage('Pakartokite slaptažodį');
      return;
    }

    if (password !== confirmPassword) {
      setPassword('');
      setConfirmPassword('');
      refPassword.current.focus();
      setMessage('Slaptažodžiai nesutampa');
      return;
    }
    // FUTURE ME NEEDS TO DO ALL OTHER VALIDATIONS

    axios
      .post(signupURI, { fullName, childsFullName, email, password })
      .then((res) => setMessage(res.data))
      .catch((err) => setMessage(err.response.data));
    console.log('effektas');
  };
  return (
    <StyledForm onSubmit={(e) => formSubmitHandler(e)}>
      <StyledLabelInputWrapper>
        <Label forProp='fullNameSignup' text='Vardas ir pavardė' />
        <Input
          type='text'
          pHolder='Vardas Pavardenis'
          id='fullNameSignup'
          action={(e) => setFullName(e.target.value)}
          value={fullName}
        />
      </StyledLabelInputWrapper>
      <StyledLabelInputWrapper>
        <Label forProp='childsFullNameSignup' text='Vaiko vardas ir pavardė' />
        <Input
          type='text'
          pHolder='Vardas Pavardenis'
          id='childsFullNameSignup'
          action={(e) => setChildsFullName(e.target.value)}
          value={childsFullName}
        />
      </StyledLabelInputWrapper>
      <StyledLabelInputWrapper>
        <Label forProp='emailSignup' text='El.paštas' />
        <Input
          type='text'
          pHolder='abc@abc.ab'
          id='emailSignup'
          action={(e) => setEmail(e.target.value)}
          value={email}
        />
      </StyledLabelInputWrapper>
      <StyledLabelInputWrapper>
        <Label forProp='passwordSignup' text='Slaptažodis' />
        <Input
          reference={refPassword}
          type='password'
          pHolder=''
          id='passwordSignup'
          action={(e) => setPassword(e.target.value)}
          value={password}
        />
      </StyledLabelInputWrapper>
      <StyledLabelInputWrapper>
        <Label forProp='confirmPasswordSignup' text='Pakartokite Slaptažodi' />
        <Input
          type='password'
          pHolder=''
          id='confirmPasswordSignup'
          action={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
      </StyledLabelInputWrapper>

      <StyledLabelInputWrapper>
        <Input type='submit' value='Sukurti paskyra' />
      </StyledLabelInputWrapper>
      {message && <p>{message}</p>}
    </StyledForm>
  );
};

export default SignupForm;
