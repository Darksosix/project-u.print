const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName:       { type: String, required: true },
  lastName:        { type: String, required: true },
  phoneNumber:     { type: String },
  email:           { type: String, required: true, unique: true },
  address:         { type: String },
  subDistrict:     { type: String },
  district:        { type: String },
  province:        { type: String },
  zipCode:         { type: String },
  password:        { type: String, required: true },
  createdAt:       { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
