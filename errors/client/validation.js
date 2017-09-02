'use strict';

/**
 * Dependencies
 */
const ClientError = require('../client');

/**
 * Error class
 */
class ValidationError extends ClientError {

  /**
   * Constructor
   */
  constructor(message, data, isTrivial = true) {

    //Object given?
    if (typeof message === 'object') {
      data = message;
      message = '';
    }

    //Default message
    message = message || ValidationError.createMessage(data);

    //Parent constructor
    super(message, data, 422);

    //Set data
    this.code = 'NOT_VALIDATED';
    this.isTrivial = isTrivial;
  }

  /**
   * Helper to create message based on data
   */
  static createMessage(data) {

    //Initialize
    let message = 'Validation error';

    //No data or not the expected structure?
    if (!data || typeof data !== 'object' || !data.fields) {
      return message;
    }

    //Append fields
    const {fields} = data;
    for (const field in fields) {
      if (fields.hasOwnProperty(field)) {
        const {type, message: fieldMessage} = fields[field];
        message += `\n  - ${field}: ${fieldMessage} (${type})`;
      }
    }

    //Return
    return message;
  }

  /**
   * Helper to
   */
  static fromMongoose(mongooseError) {

    //Get info from error and initialize data
    const {message, errors} = mongooseError;
    const data = {fields: {}};

    //Initialize data for validation error
    for (const field in errors) {
      if (errors.hasOwnProperty(field)) {
        const {kind: type, message} = errors[field];
        data.fields[field] = {type, message};
      }
    }

    //Create new error
    return new ValidationError(message, data);
  }
}

//Export
module.exports = ValidationError;
