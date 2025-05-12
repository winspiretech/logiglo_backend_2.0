class ApiError {
    constructor(statusCode, message = "Something went wrong", error = null) {
      this.statusCode = statusCode;
      this.success = false;
      this.message = message;
      this.error = error; // 
    }
  }
  
  module.exports = { ApiError };
  