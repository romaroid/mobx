const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
} = require('graphql');

const getCurrencyValue = (min = 100, max = 200, precision = 4) =>
  +(Math.random() * (max - min) + min).toPrecision(precision);

const CurrencyType = new GraphQLObjectType({
  name: 'Currency',
  description: 'This represents a currency',
  fields: () => ({
    id: {
      type: GraphQLID, // required
    },
    name: {
      type: GraphQLString,
    },
    value: {
      type: GraphQLFloat,
      description: 'Value of currency', // optional
      resolve: () => getCurrencyValue(), // optional
    },
  }),
});

module.exports = CurrencyType;
