const {
  GraphQLObjectType,
  GraphQLFloat,
} = require('graphql');

const FeeType = new GraphQLObjectType({
  name: 'Fee',
  description: 'This represents a fee',
  fields: () => ({
    value: {
      type: GraphQLFloat,
    },
  }),
});

module.exports = FeeType;
