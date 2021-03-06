import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: Int!
    username: String!
    email: String!
  }

  type signupResponse {
    ok: Boolean!
    user: User
    errors: [Error]
  }

  type LoginResponse {
    ok: Boolean!
    user: User
    errors: [Error]
    accessToken: String
  }

  extend type Query {
    getUser(username: String!): User
  }

  extend type Mutation {
    signupUser(
      username: String!
      email: String!
      password: String!
    ): signupResponse!

    loginUser(email: String!, password: String!): LoginResponse!

    logoutUser: Boolean!
  }
`;
