import ClientError from '../client.js'

/**
 * Error class
 */
export default class NotFoundError extends ClientError {

  /**
   * Constructor
   */
  constructor(message, data) {

    //Default message
    message = message || 'Not found'

    //Parent constructor
    super(message, data, 404)

    //Set data
    this.code = 'NOT_FOUND'
    this.isTrivial = true
  }
}
