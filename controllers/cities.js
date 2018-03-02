const Country = require('../models/country');

function citiesShow(req, res, next) {
  Country
    .findById(req.params.countryId)
    .exec()
    .then(country => {
      if(!country) return res.notFound();

      const city = country.cities.id(req.params.cityId);

      return res.status(200).json(city);
    })
    .catch(next);
}

function citiesPlacesCreate(req, res, next) {
  Country
    .findById(req.params.countryId)
    .exec()
    .then(country => {
      if(!country) return res.notFound();
      const city = country.cities.id(req.params.cityId);
      city.places.push(req.body);
      country.save();
      return res.status(201).json(city);
    })
    .catch(next);
}

module.exports = {
  show: citiesShow,
  placesCreate: citiesPlacesCreate
};
