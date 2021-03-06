/**
 * main dependencies
 */
require('dotenv').config();

/**
 * third party libraries
 */
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const { graphqlExpress } = require('apollo-server-express');
const http = require('http');
const expressPlayground = require('graphql-playground-middleware-express').default;

/**
 * server configuration
 */
const config = require('./src/config/');
const schema = require('./src/schema');

// environment: development, testing, production
const environment = process.env.NODE_ENV;

/**
 * express application
 */
const api = express();
const server = http.Server(api);

// allow cross origin requests
// configure to allow only requests from certain origins
api.use(cors());

// parsing the request bodys
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

api.use('/graphql', bodyParser.json(), graphqlExpress({ schema, cacheControl: true }));
api.get('/explore', expressPlayground({ endpoint: '/graphql' }));

server.listen(config.port, () => {
  if (environment !== 'production' &&
    environment !== 'development' &&
    environment !== 'testing'
  ) {
    console.error(`NODE_ENV is set to ${environment}, but only production and development are valid.`);
    process.exit(1);
  }
  // return DB;
});
