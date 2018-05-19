const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');

const feeQuery = require('../schema/queries/fee');
const currenciesQuery = require('../schema/queries/currencies');
const currencyQuery = require('../schema/queries/currency');
const currencyRateQuery = require('../schema/queries/currencyRate');
const weatherQuery = require('../schema/queries/weather');

const RootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  description: 'This is the root query which holds all possible READ entrypoints for the GraphQL API',
  fields: () => ({
    fee: feeQuery,
    currencies: currenciesQuery,
    currency: currencyQuery,
    currencyRate: currencyRateQuery,
    weather: weatherQuery,
  }),
});

const schema = new GraphQLSchema({
  query: RootQuery,
  // mutation: RootMutation,
});

module.exports = schema;
