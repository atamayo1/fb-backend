const UserResolver = require('./UserResolvers');
const PostResolver = require('./PostResolvers');
const { EmailAddressResolver, URLResolver } = require('graphql-scalars');

module.exports = {
    URL: URLResolver,
    EmailAddress: EmailAddressResolver,
    Query:{
        ...UserResolver.Query,
        ...PostResolver.Query
    },
    Mutation: {
        ...UserResolver.Mutation,
        ...PostResolver.Mutation
    }
};
