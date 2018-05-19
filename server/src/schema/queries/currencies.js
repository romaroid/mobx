const { GraphQLList } = require('graphql');
const uuid = require('uuid').v4;
const CurrencyType = require('../../types/CurrencyType');

const currencyQuery = {
  type: new GraphQLList(CurrencyType), // type to be returned by the query
  resolve: () => ([
    { id: uuid(), type: 'EUR', label: 'Euro',            rate: 0.000001 },
    { id: uuid(), type: 'USD', label: 'US Dollar',       rate: 0.00000075 },
    { id: uuid(), type: 'CAD', label: 'Canadian Dollar', rate: 0.00000085 },
  ]), // resolves the entity(-ies) itself
};

module.exports = currencyQuery;
