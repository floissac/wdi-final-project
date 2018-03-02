const Country = require('../models/country');


function placesShow(req, res, next) {
  Country
    .findById(req.params.countryId)
    .exec()
    .then(country => {
      if(!country) return res.notFound();

      const place = country.cities.places.id(req.params.palceId);

      return res.status(200).json(place);
    })
    .catch(next);
}

module.exports = {
  show: placesShow
};
