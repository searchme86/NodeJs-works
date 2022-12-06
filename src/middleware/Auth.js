import jwt from 'jsonwebtoken';
import { UnauthenticatedError } from '../utils/unauthenticated';
// import { CustomAPIError } from '../utils/CustomError';
// import { UnauthenticatedError } from '../src/utils/unauthenticated';

export const Auth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;

  console.log('authHeader', authHeader);
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Authentication invalid');
  }
  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // attach the user to the job routes
    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Authentication invalid');
  }
};
