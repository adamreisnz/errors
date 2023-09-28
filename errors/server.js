import BaseError from './base.js'

/**
 * Error class
 */
export default class ServerError extends BaseError {

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
    if (status < 500 || status > 599) {
      status = 500
    }

    //Default message
    message = message || 'Client error'

    //Parent constructor
    super(message, data, status)
  }
}
