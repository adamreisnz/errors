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

    //No data or not an object?
    if (!data || typeof data !== 'object') {
      return 'Validation error';
    }

    //Not an array
    if (!Array.isArray(data)) {
      data = [data];
    }

    //Array
    let message = `${data.length} validation errors occurred`;
    for (const error of data) {
      const {field, type, message: fieldMessage} = error;
      message += `\n  - ${field}: ${fieldMessage} (${type})`;
    }

    //Return
    return message;
  }

  /**
   * Check if an error is a mongoose error
   */
  static isMongooseError(error) {
    return (typeof error === 'object' && error.name === 'MongooseError');
  }

  /**
   * Helper to convert mongoose error to validation error
   */
  static fromMongoose(mongooseError) {

    //Get info from error and initialize data
    const {message, errors} = mongooseError;
    const data = [];

    //Initialize data for validation error
    for (const field in errors) {
      if (errors.hasOwnProperty(field)) {
        const {kind: type, message} = errors[field];
        data.push({field, type, message});
      }
    }

    //Create new error
    return new ValidationError(message, data);
  }
}

//Export
module.exports = ValidationError;
