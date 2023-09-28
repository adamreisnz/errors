import ClientError from '../client.js'

/**
 * Error class
 */
export default class NotAuthenticatedError extends ClientError {

  /**
   * Constructor
   */
  constructor(message, data) {

    //Default message
    message = message || 'Not authenticated'

    //Parent constructor
    super(message, data, 401)

    //Set data
    this.code = 'NOT_AUTHENTICATED'
    this.isTrivial = true
  }
}
