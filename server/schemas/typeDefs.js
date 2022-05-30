const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Apps {
        name: String
        email: String
        date: String
    }

    type User {
        email: String
        password: String
    }

    type Query {
        applications: [Apps]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        addApp(name: String!, email: String!, date: String!): Apps
        login(email: String!, password: String!): Auth
        addUser(email: String!, password: String!): User
    }
`;

module.exports = typeDefs;