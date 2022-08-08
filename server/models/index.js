// the main file of the models
// put the require for each endpoint route from the Models

const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
const Order = require('./Order');

// export all of them
module.exports = { User, Product, Category, Order };
