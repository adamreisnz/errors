import ClientError from '../client.js'

/**
 * Error class
 */
export default class NotAuthorizedError extends ClientError {

  /**
   * Constructor
   */
  constructor(message, data) {

    //Default message
    message = message || 'Not authorized'

    //Parent constructor
    super(message, data, 403)

    //Set data
    this.code = 'NOT_AUTHORIZED'
    this.isTrivial = true
  }
}
