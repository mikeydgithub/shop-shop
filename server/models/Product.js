// import mongoose
const mongoose = require('mongoose');

// create schema and set equal to mongoose
const { Schema } = mongoose;

// new schema for product
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

// mongoose.model takes a string and a constant element
const Product = mongoose.model('Product', productSchema);

// export Product model
module.exports = Product;
