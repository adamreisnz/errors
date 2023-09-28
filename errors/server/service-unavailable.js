import ServerError from '../server.js'

/**
 * Error class
 */
export default class ServiceUnavailableError extends ServerError {

  /**
   * Constructor
   */
  constructor(message) {

    //Default message
    message = message || 'Service unavailable'

    //Parent constructor
    super(message, 503)

    //Set data
    this.code = 'SERVICE_UNAVAILABLE'
    this.isTrivial = true
  }
}
