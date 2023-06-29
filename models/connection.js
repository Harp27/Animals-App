require("dotenv").config();
const mongoose = require('mongoose');

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL);

mongoose.connection
    .on('open', () => console.log('Mongoose connected'))
    .on('close', () => console.log('Disconnected from Mongoose'))
    .on('error', () => console.log('Mongoose error'))


module.exports = mongoose;