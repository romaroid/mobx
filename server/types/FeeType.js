const {
  GraphQLObjectType,
  GraphQLFloat,
} = require('graphql');

const getRandomFloat = (min = 0, max = 0.2, precision = 1) =>
  +(Math.random() * (max - min) + min).toPrecision(precision);

const FeeType = new GraphQLObjectType({
  name: 'Fee',
  description: 'This represents a fee',
  fields: () => ({
    value: {
      type: GraphQLFloat,
      resolve: () => getRandomFloat(),
    },
  }),
});

module.exports = FeeType;
