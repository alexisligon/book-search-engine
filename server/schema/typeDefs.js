const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Query {
    me: User
  }
  
  type User {
    username: String!
    email: String!
    savedBooks: [Book]
  }

  type Book {
      bookId: ID!
      authors: String!
      description: String!
      image: String!
      link: String!
      title: String!
  }
`;

module.exports = typeDefs;