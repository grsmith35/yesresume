const { AuthenticationError } = require('apollo-server-express');
const { User, Apps } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers =  {
  Query: {
      applications: async (parent, { date }) => {
          const params  = date ? { date } : {}
          return Apps.find(params);
      }
  }, 
  Mutation: {
      addApp: async (parent, args) => {
          const app = await Apps.create(args);
          return app;
      }
  }
};

module.exports = resolvers;
