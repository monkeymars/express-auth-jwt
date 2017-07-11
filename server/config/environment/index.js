'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 9000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'travelguts-secret'
  },

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },

  facebook: {
    clientID: '646915692125210',
    clientSecret: 'c9639971b0a4dda87cf655f4df53d550',
    callbackURL: 'https://ullem.com/auth/facebook/callback'
  },

  twitter: {
    clientID: 'VWAxgP0Wg5RLFBXu2N1stYfkC',
    clientSecret: 'zRBQqOidOM9Wa9M6NCICZsYm81bsPLKJFczhdcyTFnkxf9DAr6',
    callbackURL: (process.env.DOMAIN || '') + '/auth/twitter/callback'
  },

  google: {
    clientID: '748892822925-7gfl1fajdk2lpa4mbj7rok3q5uh6r97e.apps.googleusercontent.com',
    clientSecret: 'qnD6YxI5ewTWv0pzPjry7Iy7',
    callbackURL: 'https://ullem.com/auth/google/callback'
  }

};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
  require('./shared'),
  require('./' + process.env.NODE_ENV + '.js') || {});
