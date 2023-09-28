import ServerError from '../server.js'

/**
 * Error class
 */
export default class GatewayTimeoutError extends ServerError {

  /**
   * Constructor
   */
  constructor(message) {

    //Default message
    message = message || 'Gateway timeout'

    //Parent constructor
    super(message, 504)

    //Set data
    this.code = 'GATEWAY_TIMEOUT'
    this.isTrivial = true
  }
}
