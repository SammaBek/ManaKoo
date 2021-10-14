const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name of a house is required'],
  },
  description: {
    type: String,
    required: [true, 'description of house is required'],
  },
  location: {
    type: String,
    required: [true, ' a house has to have location'],
  },
  bedrooms: {
    type: Number,
    required: [true, ' bedroom number must be specified'],
  },
  bathrooms: {
    type: Number,
    required: [true, 'number of bathrooms must be specified'],
  },
  price: {
    type: Number,
    required: [true, 'price must be specified'],
  },
  datePosted: {
    type: Date,
    default: Date.now(),
  },
  negotiable: {
    type: String,
  },
});

const House = mongoose.model('House', houseSchema);

module.exports = House;
