const Joi = require('joi');

module.exports = (server) => {
  //testing to return html
  server.route({
    method: 'GET',
    path: '/test',
    /**
     *
     * @param {import('@hapi/hapi').Request} request
     * @param {import('@hapi/hapi').ResponseToolkit} response
     * @returns
     */
    handler: async (request, response) => {
      console.log(request.payload);
      return h.response('<h1>Gbas gbos</h1>');
    },
  });

  return server;
};
