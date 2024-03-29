import ClientError from '../client.js'

/**
 * Error class
 */
export default class TooManyRequestsError extends ClientError {

  /**
   * Constructor
   */
  constructor(message, data) {

    //Default message
    message = message || 'Too many requests'

    //Parent constructor
    super(message, data, 429)

    //Set data
    this.code = 'TOO_MANY_REQUESTS'
    this.isTrivial = true
  }
}
