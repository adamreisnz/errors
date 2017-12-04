'use strict';

/**
 * Base error class
 */
class BaseError extends Error {

  /**
   * Constructor
   */
  constructor(message, data, status) {

    //Parent constructor
    super(message);

    //If used another error as constructor, copy those properties
    //NOTE: must manually copy stack
    if (message && message instanceof Error) {
      Object.assign(this, message);
      this.stack = message.stack;
    }

    //Otherwise, check if data given as first parameter
    else if (message && typeof message === 'object') {
      data = message;
      message = '';
    }

    //Set name, message, data and status
    this.name = this.constructor.name;
    this.message = this.message || message || 'Error';
    this.data = data || null;
    this.status = status || 500;

    //Capture stack trace
    if (!this.stack) {
      Error.captureStackTrace(this, this.constructor);
    }

    //Clean up stack trace
    const cwd = process.cwd();
    this.stack = this.stack.replace(new RegExp(cwd + '/', 'gi'), '');
  }

  /**
   * To string
   */
  toString() {
    return this.name + ': ' + this.message;
  }

  /**
   * To JSON
   */
  toJSON() {

    //Extract data and prepare json
    const {name, message, code, data} = this;
    const json = {name};

    //Add code if given
    if (code) {
      json.code = code;
    }

    //Append message
    if (message) {
      json.message = message;
    }

    //Append data
    if (data) {
      json.data = data;
    }

    //Retun JSON
    return json;
  }

  /**
   * From JSON
   */
  static fromJSON(json, status) {

    //Extract data
    const {name, message, code, data} = json;

    //Create new error and set name and code
    const error = new this(message, data, status);
    Object.assign(error, {name, code});

    //Return
    return error;
  }
}

//Export
module.exports = BaseError;
