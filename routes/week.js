const express = require('express');
const router = express.Router();
const plants = require('../services/plants');

router.get('/:table', async function (req, res, next) {
  const table = req.params.table;

  try {
    res.json(await plants.getMultipleDates(table));
  } catch (err) {
    console.error(`Error while getting plants `, err.message);
    next(err);
  }
});

module.exports = router;

