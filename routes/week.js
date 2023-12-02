const express = require('express');
const router = express.Router();
const plants = require('../services/plants');

const table = "garlic"

router.get('/', async function (req, res, next) {
  try {
    res.json(await plants.getMultipleDates(table));
  } catch (err) {
    console.error(`Error while getting plants `, err.message);
    next(err);
  }
});

module.exports = router;

