const mongoose = require('../models/connection');

const animalSchema = new mongoose.Schema({
    species: String,
    extinct: Boolean, 
    location: String,
    lifeExpectancy: Number
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;