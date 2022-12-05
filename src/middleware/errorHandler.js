import { CustomAPIError } from '../utils/CustomError';
import StatusCode from 'http-status-codes';

export const ErrorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res
      .status(StatusCode.INTERNAL_SERVER_ERROR)
      .json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: `Something went wrong, please try again` });
};
