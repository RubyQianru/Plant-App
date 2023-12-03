const express = require('express');
const router = express.Router();
const schedule = require('../services/schedule');

router.get('/', async function (req, res, next) {
  try {
    res.json(await schedule.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting schedule `, err.message);
    next(err);
  }
});

module.exports = router;
