const mongoose = require('mongoose');

const TherapySchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String
});

module.exports = mongoose.model('Therapy', TherapySchema);
