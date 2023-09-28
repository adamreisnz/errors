import InvalidTokenError from './invalid-token.js'

/**
 * Error class
 */
export default class ExpiredTokenError extends InvalidTokenError {

  /**
   * Constructor
   */
  constructor(message) {

    //Default message
    message = message || 'Expired token'

    //Parent constructor
    super(message)

    //Set data
    this.code = 'EXPIRED_TOKEN'
  }
}
