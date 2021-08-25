const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async () => {
            const userData = await User.findOne({
                $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
            })
            return userData;
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