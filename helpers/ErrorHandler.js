require('dotenv').config();

const sendProdError = () => {};

/**
 *
 * @param {import('@hapi/hapi').Request} request
 * @param {import('@hapi/hapi').ResponseToolkit} response
 * @returns
 */
module.exports = (request, response) => {
  if (request.response.isBoom) {
    const err = request.response;
    const errName = err.output.payload.error + 'Favour';
    const statusCode = err.output.payload.statusCode;
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'production') {
      return {
        status: 'fail',
        message: err.output.payload.message,
      };
    }

    if (process.env.NODE_ENV === 'development') {
      return {
        status: 'fail',
        err: request.response.output.payload,
        stack: request.response.stack,
        // errName: err.output.payload.error,
        // statusCode: err.output.payload.statusCode,
      };
    }
  }

  return request.response;
};
