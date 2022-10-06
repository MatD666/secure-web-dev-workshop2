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
                    type: {type:String}
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
    for(const filmingLocation of filmingLocations){
        const Local = new Locations({
            filmType: filmingLocation.fields.type_tournage,
            filmProducerName: filmingLocation.fields.nom_producteur,
            endDate:   filmingLocation.fields.date_fin,
            filmName: filmingLocation.fields.nom_tournage,
            district: filmingLocation.fields.ardt_lieu,
            geolocation:{coordinates:filmingLocation.fields.geo_shape.coordinates,
                type: filmingLocation.fields.geo_shape.type,
            },
            sourceLocationId: filmingLocation.fields.id_lieu,
            filmDirectorName: filmingLocation.fields.nom_realisateur,
            address: filmingLocation.fields.adresse_lieu,
            startDate: filmingLocation.fields.date_debut,
            year: filmingLocation.fields.annee_tournage,
        })
        await Local.save();
    }
    console.log(' ♥♥♥ ◄ I am finish ► ♥♥♥ ')
}

main();