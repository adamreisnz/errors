import ClientError from '../client.js'

/**
 * Error class
 */
export default class InvalidTokenError extends ClientError {

  /**
   * Constructor
   */
  constructor(message) {

    //Default message
    message = message || 'Invalid token'

    //Parent constructor
    super(message)

    //Set data
    this.code = 'INVALID_TOKEN'
    this.isTrivial = true
  }
}
