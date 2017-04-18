const graphql = require('graphql')
const axios = require('axios')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} = graphql

const MarketplaceAddonType = new GraphQLObjectType({
  name: 'MarketplaceAddon',
  fields: {
    name: { type: GraphQLString },
    enabled: { type: GraphQLString }
  }
})

const MarketplaceType = new GraphQLObjectType({
  name: 'Marketplace',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    short_name: { type: GraphQLString },
    color_1: { type: GraphQLString },
    color_2: { type: GraphQLString },
    color_3: { type: GraphQLString },
    color_4: { type: GraphQLString },
    color_5: { type: GraphQLString },
    website: { type: GraphQLString },
    payment_frequency: { type: GraphQLString },
    alt_marketplace_id: { type: GraphQLString },
    state: { type: GraphQLString },
    logo: { type: GraphQLString },
    active: { type: GraphQLString },
    alt_marketplace_auth: { type: GraphQLString },
    marketplace_addons: { type: new GraphQLList(MarketplaceAddonType) },
    currency: { type: GraphQLString },
    sending_mobile: { type: GraphQLString },
    sending_email: { type: GraphQLString },
    custom_stylesheet: { type: GraphQLString },
    cc_hold_for: { type: GraphQLString },
    soft_descriptors: { type: GraphQLString },
    seller_merchants: { type: GraphQLString },
    email: { type: GraphQLString },
    seller_white_labeled: { type: GraphQLString },
    partial_refunds: { type: GraphQLString },
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    marketplace: {
      type: MarketplaceType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3001/api/marketplaces/${args.id}`)
           .then(resp => resp.data.marketplaces);
      }
    },
    marketplaces: {
      type: new GraphQLList(MarketplaceType),
      args: { search: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3001/api/marketplaces?search=${args.search}`)
          .then(resp => resp.data.marketplaces);
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
