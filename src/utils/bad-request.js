import { CustomAPIError } from './CustomError';
import StatusCode from 'http-status-codes';

export class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCode.BAD_REQUEST;
  }
}
