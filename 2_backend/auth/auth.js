import jwt from 'jsonwebtoken';
import { UserModel } from '../models/userModel.js';

export const authentificateToken = async (req, res, next) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith('Bearer')
  ) {
    console.log('Not authorized, wrong or no headers');
    return res.status(401);
  }

  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];
  if (!token) {
    console.log('Not authorized, wrong or no token');
    return res.status(401);
  }

  const isVerified = jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) {
        console.log('decoded error', err);
        return res.status(403);
      }
      req.user = await UserModel.findById(decoded.id).select(
        'fullName acces group'
      );
      next();
    }
  );
};
