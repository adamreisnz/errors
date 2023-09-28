import ClientError from '../client.js'

/**
 * Error class
 */
export default class ExistsError extends ClientError {

  /**
   * Constructor
   */
  constructor(message, data) {

    //Default message
    message = message || 'Already exists'

    //Parent constructor
    super(message, data, 409)

    //Set data
    this.code = 'EXISTS'
    this.isTrivial = true
  }
}
