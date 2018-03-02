const Country = require('../models/country');

function indexRoute(req, res, next) {
  Country
    .find()
    .exec()
    .then((places) => res.json(places))
    .catch(next);
}

function createRoute(req, res, next) {
  Country
    .create(req.body)
    .then((place) => res.status(201).json(place))
    .catch(next);
}

function showRoute(req, res, next) {
  Country
    .findById(req.params.id)
    .exec()
    .then((place) => {
      if(!place) return res.notFound();
      res.json(place);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Country
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(place => res.status(200).json(place))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Country
    .findById(req.params.id)
    .then((place) => {
      if(!place) return res.notFound();
      return place.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
