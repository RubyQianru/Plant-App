const express = require('express');
const router = express.Router();
const plants = require('../services/plants');

router.get('/:table', async function (req, res, next) {
  const table = req.params.table;

  try {
    res.json(await plants.getMultiple(table));
  } catch (err) {
    console.error(`Error while getting plants `, err.message);
    next(err);
  }
});

router.post('/:table', async function(req,res,next){
  const table = req.params.table;

  try{
    res.json(await plants.create(table, req.body))
  }catch(err){
    console.error("Can't create")
    next(err)
  }
})

module.exports = router;
