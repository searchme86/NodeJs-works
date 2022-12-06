import { BadRequest } from '../utils/bad-request';

export const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequest('Test User. Read Only');
  }
  next();
};
