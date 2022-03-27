const Joi = require('joi');

module.exports = (server) => {
  server.route({
    method: 'GET',
    path: '/api',

    /**
     * @param {import('@hapi/hapi').Request} request
     * @param {import('@hapi/hapi').ResponseToolkit} response
     * @returns
     */
    handler: async function (request, response) {
      return {
        status: 'Here baby',
      };
    },
  });

  server.route({
    method: 'POST',
    path: '/api/test',
    /**
     *
     * @param {import('@hapi/hapi').Request} request
     * @param {import('@hapi/hapi').ResponseToolkit} response
     * @returns
     */
    handler: async (request, response) => {
      console.log(request.payload);
      return request.payload;
    },
    options: {
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          email: Joi.string().email().required(),
          password: Joi.string().required().min(6).max(12),
        }),
      },
    },
  });
  return server;
};
