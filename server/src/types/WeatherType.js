const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} = require('graphql');

const CoordsType = new GraphQLObjectType({
  name: 'Coordinates',
  description: 'Value of currency', // optional
  fields: () => ({
    latitude: {
      type: GraphQLFloat,
      resolve: ({ coord }) => coord.lat,
    },
    longitude: {
      type: GraphQLFloat,
      resolve: ({ coord }) => coord.lon,
    }
  }),
});

const WeatherType = new GraphQLObjectType({
  name: 'Weather',
  description: 'This represents a weather',
  fields: () => ({
    id: {
      type: GraphQLID, // required
    },
    name: {
      type: GraphQLString,
    },
    coords: {
      type: CoordsType,
      resolve: weather => weather,
    },
    clouds: {
      type: GraphQLInt,
      resolve: weather => weather.clouds ? weather.clouds.all : null,
    }
  }),
});

module.exports = WeatherType;
