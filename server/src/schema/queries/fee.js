const {
  GraphQLString,
  GraphQLFloat,
} = require('graphql');

const FeeType = require('../../types/FeeType');

const getRandomFloat = (min = 0, max = 0.2, precision = 1) =>
  +(Math.random() * (max - min) + min).toPrecision(precision);

const feeQuery = {
  type: FeeType,
  args: {
    currency: { type: GraphQLString },
    amount: { type: GraphQLFloat },
  },
  resolve: (context, args) => {
    if (typeof args.currency !== 'string' || typeof args.amount !== 'number') {
      throw new Error('Invalid params for fee query!');
    }

    return {
      value: getRandomFloat(),
    }
  }, // resolves the entity itself
};

module.exports = feeQuery;
