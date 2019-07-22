

const express = require('express');
var router = express.Router();
var models = require('../models');


router.get('/', function (req, res, next) {
    models.film
      .findAll({
          model: models.film,
      })
      .then(filmsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(filmsFound));
      });
  });


router.get('/:id', function (req, res, next) {
    models.film
      .findByPk(parseInt(req.params.id), {
        model: models.film,
      })
      .then(filmsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(filmsFound));
      })
  });

  
router.put("/:id", function (req, res, next) {
    let filmId = parseInt(req.params.id);
    models.film
      .update(req.body, { where: { film_id: filmId } })
      .then(result => res.redirect('/films'))
      .catch(err => {
        res.status(400);
        res.send("There was a problem updating the film. Please check the film information.");
      });
  });


module.exports = router;

