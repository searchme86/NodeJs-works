import { CustomAPIError } from './CustomError';
import StatusCode from 'http-status-codes';

export class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCode.UNAUTHORIZED;
  }
}
