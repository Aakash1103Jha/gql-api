import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    getAllUsers: [User]
    getUserById(id: ID!): User
  }
  type User implements Auth {
    id: ID!
    name: String!
    email: String!
    password: String!
  }
  interface Auth {
    email: String!
    password: String!
  }
  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
  }
`;

export default typeDefs;
