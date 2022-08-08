// import mongoose
const mongoose = require('mongoose');

// create schema and set equal to mongoose
const { Schema } = mongoose;

// new schema for order
const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

// mongoose.model takes a string and a constant element
const Order = mongoose.model('Order', orderSchema);

// export Order to use in index
module.exports = Order;
