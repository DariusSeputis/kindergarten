import jwt from 'jsonwebtoken';

export const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '10d',
  });
  return token;
};
