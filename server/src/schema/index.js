const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');

const feeQuery = require('../schema/queries/fee');

const RootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  description: 'This is the root query which holds all possible READ entrypoints for the GraphQL API',
  fields: () => ({
    fee: feeQuery,
  }),
});

const schema = new GraphQLSchema({
  query: RootQuery,
  // mutation: RootMutation,
});

module.exports = schema;
