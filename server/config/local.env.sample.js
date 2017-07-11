'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'travelguts-secret',

  FACEBOOK_ID:      '646915692125210',
  FACEBOOK_SECRET:  'c9639971b0a4dda87cf655f4df53d550',

  TWITTER_ID:       'app-id',
  TWITTER_SECRET:   'secret',

  GOOGLE_ID: '781718457323-2vs6rq3jmvm3tv6hk1oomdrck8mr94h8.apps.googleusercontent.com',
  GOOGLE_SECRET: 'ycU7K6rqEeaWCSnXlnFu0Y4E',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
