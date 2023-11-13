const express = require('express');
const router = express.Router();
const plants = require('../services/plants');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await plants.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting plants `, err.message);
    next(err);
  }
});

router.put('/:id', async function(req, res, next) {
    try {
      res.json(await plants.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating plant`, err.message);
      next(err);
    }
  });

router.post('/', async function(req, res, next) {
  try {
    res.json(await plants.create(req.body));
  } catch (err) {
    console.error(`Error while posting plant data`, err.message);
    next(err);
  }
});
  

module.exports = router;