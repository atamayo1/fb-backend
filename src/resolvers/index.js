const UserResolver = require('./UserResolvers');
const PostResolver = require('./PostResolvers');
const CommentResolver = require('./CommentResolvers');
const { EmailAddressResolver, URLResolver } = require('graphql-scalars');

module.exports = {
    URL: URLResolver,
    EmailAddress: EmailAddressResolver,
    Query:{
        ...UserResolver.Query,
        ...PostResolver.Query,
        ...CommentResolver.Query
    },
    Mutation: {
        ...UserResolver.Mutation,
        ...PostResolver.Mutation,
        ...CommentResolver.Mutation
    }
};
