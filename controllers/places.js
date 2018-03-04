const Country = require('../models/country');

function placesShow(req, res, next) {
  Country
    .findById(req.params.countryId)
    .exec()
    .then(country => {
      if(!country) return res.notFound();

      const city = country.cities.id(req.params.cityId); // first find the city (embedded in the country)
      const place = city.places.id(req.params.placeId);  // then find the place (embedded in the city)

      return res.status(200).json(place);
    })
    .catch(next);
}

function placesUpdate(req, res, next) {
  Country
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(country => {
      if(!country) return res.notFound();

      const city = country.cities.id(req.params.cityId);
      const place = city.places.id(req.params.placeId);  

      return res.status(200).json(place);
    })
    .catch(next);

}
//
// function placesCreate(req, res, next) {
//   Country
//     .findById(req.params.countryId)
//     .exec()
//     .then(country => {
//       if(!country) return res.notFound();
//       const city = country.cities.id(req.params.cityId);
//       city.places.push(req.body);
//       country.save();
//       return res.status(201).json(city);
//     })
//     .catch(next);
// }

module.exports = {
  show: placesShow,
  update: placesUpdate
  // create: placesCreate
};
