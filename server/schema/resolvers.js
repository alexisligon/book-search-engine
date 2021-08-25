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
        // add user
        // removeBook

        login: async(parent, {email, password}) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError("Can't find this user")
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("Wrong Password!")
            }
        },

        saveBook: async(parent, {bookData}, context) => {
            if(context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: user._id },
                    { $addToSet: { savedBooks: bookData } },
                    { new: true, runValidators: true }
                  )
                  return updatedUser;
            }

            throw new AuthenticationError("Error")
        },

        deleteBook: async(parent, {bookData}, context) => {
            if(context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: user._id },
                    { $pull: { savedBooks: { bookId: params.bookId } } },
                    { new: true }
                  )
                  return updatedUser;
            }

            throw new AuthenticationError("Error")
        }
    }
};

module.exports = resolvers;