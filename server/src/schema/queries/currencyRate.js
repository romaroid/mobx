const CurrencyType = require('../../types/CurrencyType');

const currencyQuery = {
  type: CurrencyType, // type to be returned by the query
  resolve: () => ([
    { id: Date.now(), name: 'EUR', value: 0.000001 },
    { id: Date.now()+1, name: 'USD', value: 0.00000075 },
    { id: Date.now()+2, name: 'BTC', value: 1 },
  ]), // resolves the entity itself
};

module.exports = currencyQuery;
