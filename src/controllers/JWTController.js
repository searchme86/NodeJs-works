// import { CustomAPIError } from '../utils/CustomError';
import jwt from 'jsonwebtoken';
import { BadRequest } from '../utils/bad-request';

export const login = async (req, res) => {
  const { username, password } = req.body;
  // mongo
  // joi
  // check in controller
  if (!username || !password) {
    throw new BadRequest('please provide email and password ');
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  console.log(username, password);
  return res.json({ msg: 'user created', token });
};

export const dashboard = async (req, res) => {
  console.log('req.user', req.user);
  const luckyNumber = Math.floor(Math.random() * 100);
  return res.status(200).json({
    msg: `Hello ${req.user.username}, secret : lucky number is ${luckyNumber}`,
  });
};
