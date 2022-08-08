// import mongoose
const mongoose = require('mongoose');

// create schema and set equal to mongoose
const { Schema } = mongoose;

// new schema for categories
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

// mongoose.model takes a string and a constant element
const Category = mongoose.model('Category', categorySchema);

// export Category model
module.exports = Category;
