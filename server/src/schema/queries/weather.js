const { sendRequest } = require('../../services/api');
const WeatherType = require('../../types/WeatherType');

const currencyQuery = {
  type: WeatherType, // type to be returned by the query
  resolve: (args) => sendRequest(), // resolves the entity(-ies) itself
};

module.exports = currencyQuery;
