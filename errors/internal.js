import BaseError from './base.js'

/**
 * Error class
 */
export default class InternalError extends BaseError {

  /**
   * Constructor
   */
  constructor(error) {

    //Call parent constructor
    super(error)

    //Set data
    this.code = 'INTERNAL_ERROR'
    this.status = 500
  }

  /**
   * Check if internal error
   */
  static isInternalError(error) {
    if (error instanceof EvalError) {
      return true
    }
    if (error instanceof TypeError) {
      return true
    }
    if (error instanceof RangeError) {
      return true
    }
    if (error instanceof ReferenceError) {
      return true
    }
    if (error instanceof SyntaxError) {
      return true
    }
    if (error instanceof URIError) {
      return true
    }
    return false
  }
}
