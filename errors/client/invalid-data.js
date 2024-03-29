import ClientError from '../client.js'

/**
 * Error class
 */
export default class InvalidDataError extends ClientError {

  /**
   * Constructor
   */
  constructor(message, data) {

    //Default message
    message = message || 'Invalid data'

    //Parent constructor
    super(message, data, 422)

    //Set data
    this.code = 'INVALID_DATA'
  }
}
