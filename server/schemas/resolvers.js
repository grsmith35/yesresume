const { AuthenticationError } = require('apollo-server-express');
const { ContextualSpacing } = require('docx');
const { User, Apps } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers =  {
  Query: {
      applications: async () => {
          const userApps = await Apps.find().select('-__v -password')
          return userApps;
      }
  }, 
  Mutation: {
      addApp: async (parent, args) => {
          const app = await Apps.create(args);
          return app;
      },
      addUser: async (parent, { email, password }) => {
          const user = await User.create({ email, password });
          const token = signToken(user)

          return { user, token, email}
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        if(!user) {
            throw new AuthenticationError('Incorrect credentials');
        }

        const correctPw = await user.isCorrectPassword(password);
        if(!correctPw) {
            throw new AuthenticationError('Incorrect Credentials')
        }

        const token = signToken(user);
        return { user, token }
      }
  }
};

module.exports = resolvers;
