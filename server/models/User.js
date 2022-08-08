// import mongoose
const mongoose = require('mongoose');

// create schema and set equal to mongoose
const { Schema } = mongoose;

// becasue we're creating a password, we need to setup bcrypt as a requirement
const bcrypt = require('bcrypt');

// because we're going to be saving orders to a user, we include it in this model
const Order = require('./Order');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  orders: [Order.schema]
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};


// mongoose.model takes a string and a constant element
const User = mongoose.model('User', userSchema);

// export user model
module.exports = User;
