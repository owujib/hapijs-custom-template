const Hapi = require('@hapi/hapi');
const Joi = require('joi');
const { default: mongoose } = require('mongoose');
const ErrorHandler = require('./helpers/ErrorHandler');
const api = require('./routes/api');

class kernel {
  constructor() {
    this.server = Hapi.server({
      port: process.env.PORT || 3000,
      host: process.env.HOST,
    });

    this.middlewares();
    this.routes();
    this.errorResponseHandler();
  }

  middlewares() {
    this.server.auth.default();
  }

  routes() {
    api(this.server);
  }

  errorResponseHandler() {
    this.server.ext('onPreResponse', ErrorHandler);
  }

  dbConnection() {
    // mongoose
    //   .connect('mongodb://127.0.0.1:27017/hapi')
    //   .then(() => {
    //     console.log('Database connection successful');
    //   })
    //   .catch((err) => {
    //     console.log('database error: ', err);
    //   });
  }
}

module.exports = new kernel().server;
