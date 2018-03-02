const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
  title: { type: String},
  image: { type: String},
  location: {
    lat: Number,
    lng: Number
  }
});

const citySchema = mongoose.Schema({
  name: { type: String },
  image: { type: String },
  location: {
    lat: Number,
    lng: Number
  },
  places: [ placeSchema ]
});

const countrySchema = mongoose.Schema({
  name: { type: String },
  image: { type: String },
  cities: [ citySchema ]
});

[placeSchema, citySchema, countrySchema].forEach(schema => {
  schema.set('toJSON', {
    getters: true,
    virtuals: true,
    transform(obj, json) {
      delete json._id;
      delete json.__v;
    }
  });
});


module.exports = mongoose.model('Place', countrySchema);
