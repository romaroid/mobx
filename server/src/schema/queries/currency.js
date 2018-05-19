const CurrencyType = require('../../types/CurrencyType');

const currencyQuery = {
  type: CurrencyType, // type to be returned by the query
  resolve: () => ({}), // resolves the entity itself
};

module.exports = currencyQuery;
