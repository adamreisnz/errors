import ClientError from '../client.js'

/**
 * Error class
 */
export default class NotValidatedError extends ClientError {

  /**
   * Constructor
   */
  constructor(message, data, isTrivial = true) {

    //Object given?
    if (typeof message === 'object') {
      data = message
      message = ''
    }

    //Default message
    message = message || NotValidatedError.createMessage(data)

    //Parent constructor
    super(message, data, 422)

    //Set data
    this.code = 'NOT_VALIDATED'
    this.isTrivial = isTrivial
  }

  /**
   * Helper to create message based on data
   */
  static createMessage(data) {

    //Object with single validation error
    if (typeof data === 'object') {
      if (data.path && data.type) {
        data = [data]
      }
    }

    //No data or not an array?
    if (!data || !Array.isArray(data)) {
      return 'Validation error'
    }

    //Array of validation errors
    let message = `${data.length} validation errors occurred`
    for (const error of data) {
      const {path, type, message: pathMessage} = error
      message += `\n  - ${path}: ${pathMessage} (${type})`
    }

    //Return
    return message
  }

  /**
   * Check if an error is a Joi validation error
   */
  static isJoiError(error) {
    return (typeof error === 'object' && error.isJoi)
  }

  /**
   * Check if an error is a mongoose error
   */
  static isMongooseError(error) {
    return (
      typeof error === 'object' &&
      (error.name === 'MongooseError' || error.name === 'ValidationError') &&
      typeof error.errors !== 'undefined'
    )
  }

  /**
   * Helper to convert Joi error to validation error
   */
  static fromJoi(joiError) {

    //Get details
    const {details} = joiError
    const data = []

    //Initialize data for validation error
    for (const item of details) {
      const {type, message} = item
      const path = item.path.join('.')
      data.push({path, type, message})
    }

    //Create new error
    return new NotValidatedError(data)
  }

  /**
   * Helper to convert mongoose error to validation error
   */
  static fromMongoose(mongooseError) {

    //Get info from error and initialize data
    const {message, errors} = mongooseError
    const data = []

    //Initialize data for validation error
    for (const path in errors) {
      if (Object.prototype.hasOwnProperty.call(errors, path)) {
        const {kind: type, message} = errors[path]
        data.push({path, type, message})
      }
    }

    //Create new error
    return new NotValidatedError(message, data)
  }
}
