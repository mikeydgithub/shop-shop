// import json web token requirement
const jwt = require('jsonwebtoken');

// create a secret and how long before it expires
const secret = 'mysecretsshhhhh';
const expiration = '2h';

// export authentication middleware
module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

  
    if (req.headers.authorization) {
      // use split to get the string, use .pop to remove the last part of it, use trim to remove any white spaces in the string
      token = token.split(' ').pop().trim();
    }

    // if no token exists return the request
    if (!token) {
      return req;
    }

    // try catch error
    // try taking data, use the jwt verification for token, secret, and the object maxAge: expiration
    // catch invalid token if there is no data else return request 
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },

  // signtoken which gets used in resolvers has the requirements of firstname, email, and id to login
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    // jwt to sign the data: payload, secret, and it's expiration
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
