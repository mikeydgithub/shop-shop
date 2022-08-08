// config/connection.js

// mongoose require package fomr server and mongodb connection
const mongoose = require('mongoose');


// mongodb url connection on localhost
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// export mongoose connection
module.exports = mongoose.connection;
