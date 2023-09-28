import ClientError from '../client.js'

/**
 * Error class
 */
export default class BadRequestError extends ClientError {

  /**
   * Constructor
   */
  constructor(message, data) {

    //Default message
    message = message || 'Bad request'

    //Parent constructor
    super(message, data, 400)

    //Set data
    this.code = 'BAD_REQUEST'
  }
}
