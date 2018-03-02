const router = require('express').Router();
const auth  = require('../controllers/auth');
const countries  = require('../controllers/countries');
const secureRoute = require('../lib/secureRoute');

// routes go here

router.route('/countries')
  .get(countries.index)
  .post(secureRoute, countries.create);

router.route('/countries/:id')
  .get(countries.show)
  .put(secureRoute, countries.update)
  .delete(secureRoute, countries.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);


router.all('/*', (req, res) => res.notFound());

module.exports = router;
