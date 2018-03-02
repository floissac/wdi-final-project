// const mongoose = require('mongoose');
//
// const placeSchema = mongoose.Schema({
//
//   city: { type: String, required: 'Name of place..' },
//   country: { type: String, required: 'Country...' },
//   description: { type: String, required: 'Continent...' },
//   image: { type: String, required: 'image..' },
//   location: {
//     lat: Number,
//     lng: Number
//   }
// });
// 
// placeSchema.set('toJSON', {
//   getters: true,
//   virtuals: true,
//   transform(obj, json) {
//     delete json._id;
//     delete json.__v;
//   }
// });
//
// module.exports = mongoose.model('Place', placeSchema);
