const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
} = require('graphql');

const getCurrencyRate = (min = 100, max = 200, precision = 4) =>
  +(Math.random() * (max - min) + min).toPrecision(precision);

const CurrencyType = new GraphQLObjectType({
  name: 'Currency',
  description: 'This represents a currency',
  fields: () => ({
    id: {
      type: GraphQLID, // required
    },
    type: {
      type: GraphQLString,
    },
    label: {
      type: GraphQLString,
    },
    rate: {
      type: GraphQLFloat,
      description: 'Rate of currency', // optional
      resolve: () => getCurrencyRate(), // optional
    },
  }),
});

module.exports = CurrencyType;
