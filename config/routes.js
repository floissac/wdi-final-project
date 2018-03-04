const router      = require('express').Router();
const auth        = require('../controllers/auth');
const countries   = require('../controllers/countries');
const cities      = require('../controllers/cities');
const places      = require('../controllers/places');
// const secureRoute = require('../lib/secureRoute');

// routes go here

router.route('/countries')
  .get(countries.index);
// .post(secureRoute, countries.create);

router.route('/countries/:id')
  .get(countries.show);
// .put(secureRoute, countries.update)
// .delete(secureRoute, countries.delete);

router.route('/countries/:countryId/cities/:cityId')
  .get(cities.show, places.show);

router.route('/countries/:countryId/cities/:cityId/places')
  .post(cities.placesCreate);
//
router.route('/countries/:countryId/cities/:cityId/places/:placeId')
  .put(places.update)
  .get(places.show);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);


router.all('/*', (req, res) => res.notFound());

module.exports = router;
