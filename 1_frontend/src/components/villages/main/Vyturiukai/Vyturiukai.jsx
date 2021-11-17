import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyledVyturiukai } from './Vyturiukai.style';

const Vyturiukai = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user')}`,
      },
    };
    axios
      .get('http://127.0.0.1:5000/users/test', config)
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err));
    return () => {};
  }, []);
  return (
    <StyledVyturiukai>
      <h1>Vyturiukai</h1>
      {message && <p>{message}</p>}
    </StyledVyturiukai>
  );
};

export default Vyturiukai;
