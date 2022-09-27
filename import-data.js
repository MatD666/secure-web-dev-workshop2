require('dotenv').config()
console.log(process.env)
const filmingLocations = require('./lieux-de-tournage-a-paris.json')


const mongoose = require('mongoose')
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


//mongoose.connect(process.env.MONGO_URI).then(()=> {console.log('Connected !')});
async function main () {
    const Locations = mongoose.model('locations',filmLocationShema);
    const result = await mongoose.connect(process.env.MONGO_URI);
    console.log(result);
    //const maPremiereLocation = new Locations({filmType:'Horror'});
    //await maPremiereLocation.save();
    for(X in filmingLocations){
        const Local = new Locations({
            filmType: filmingLocations[X].fields.nom_tournage,
            filmProducerName: filmingLocations[X].fields.nom_tournage,
            endDate:   Date,
            filmName: filmingLocations[X].fields.nom_tournage,
            district: filmingLocations[X].fields.nom_tournage,
            geolocation:{coordinates:[Number],
                type: String
            },
            sourceLocationId: String,
            filmDirectorName: String,
            address: String,
            startDate: Date,
            year: Number,
        })
    }
    console.log('I am finish ♥')
}

main();