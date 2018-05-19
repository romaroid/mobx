const { GraphQLList } = require('graphql');
const uuid = require('uuid').v4;
const CurrencyType = require('../../types/CurrencyType');

const currencyQuery = {
  type: new GraphQLList(CurrencyType), // type to be returned by the query
  resolve: () => ([
    { id: uuid(), name: 'EUR', value: 0.000001 },
    { id: uuid(), name: 'USD', value: 0.00000075 },
    { id: uuid(), name: 'BTC', value: 1 },
  ]), // resolves the entity(-ies) itself
};

module.exports = currencyQuery;
