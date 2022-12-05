import jwt from 'jsonwebtoken';
// import { CustomAPIError } from '../utils/CustomError';
import { UnauthenticatedError } from '../utils/unauthenticated';

export const authentication = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('No token is provided ', 401);
  }
  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('decoded', decoded);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Not authorized to access this route', 401);
  }

  next();
};
