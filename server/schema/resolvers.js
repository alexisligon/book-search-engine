const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async () => {
            return await User.findOne({
                $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
            });
        },
    },
    Mutation: {
        // login
        // add user
        // saveBook
        // removeBook
        // login: 
        // createUser: async (parent, args) => {
        //     const user = await User.create(args);
        //     return user;
        // },
        // saveBook: async()
    }
};

module.exports = resolvers;