const express = require('express');
const router = express.Router();
const plants = require('../services/plants');

router.get('/', async function (req, res, next) {
  try {
    res.json(await plants.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting plants `, err.message);
    next(err);
  }
});

router.post('/', async function(req,res,next){
  try{
    res.json(await plants.create(req.body))
  }catch(err){
    console.error("Can't create")
    next(err)
  }
})

module.exports = router;
