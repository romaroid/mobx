const FeeType = require('../../types/FeeType');

const feeQuery = {
  type: FeeType,
  resolve: () => ({}), // resolves the entity itself
};

module.exports = feeQuery;
