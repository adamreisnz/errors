import ClientError from '../client.js'

/**
 * Error class
 */
export default class NotConnectedError extends ClientError {

  /**
   * Constructor
   */
  constructor(message, data) {

    //Default message
    message = message || 'Not Connected'

    //Parent constructor
    super(message, data, 400)

    //Set data
    this.code = 'NOT_CONNECTED'
    this.isTrivial = true
  }
}
