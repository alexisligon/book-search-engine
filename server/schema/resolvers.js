const { User, Book } = require('../models');

const resolvers = {
    Query: {
        singleUser: async () => {
            return await User.findOne({
                $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
            });
        },
        book: async () => {
            return Book.find({});
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        saveBook: async()
    }
}