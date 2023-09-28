import BaseError from './base.js'

/**
 * Error class
 */
export default class ClientError extends BaseError {

  /**
   * Constructor
   */
  constructor(message, data, status) {

    //Check if status given as data
    if (data && typeof data === 'number') {
      status = data
      data = null
    }

    //Check if status valid
    if (!status || status < 400 || status > 499) {
      status = 400
    }

    //Default message
    message = message || 'Client error'

    //Parent constructor
    super(message, data, status)
  }
}
