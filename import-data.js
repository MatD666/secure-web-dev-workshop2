require('dotenv').config()
console.log(process.env)
const filmingLocations = require('./lieux-de-tournage-a-paris.json')

import mongoose from 'mongoose';
const { Schema } = mongoose;

const filmLocationShema = new Schema({
    filmType: String, // String is shorthand for {type: String}
    filmProducerName: String,
    endDate:   Date,
    filmName: String,
    district: String,
    geolocation:{coordinates:[Number],
                    type: String
                },
    sourceLocationId: String,
    filmDirectorName: String,
    address: String,
    startDate: Date,
    year: Number,
});

const Locations = mongoose.model('locations',filmLocationShema)