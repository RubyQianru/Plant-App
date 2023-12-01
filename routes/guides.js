const express = require('express');
const router = express.Router();
const guides = require('../services/guides');


router.get('/', async function (req, res, next) {
  try {
    res.json(await guides.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting guides `, err.message);
    next(err);
  }
});

// router.post('/', async function(req,res,next){
//   try{
//     res.json(await plants.create(req.body))
//   }catch(err){
//     console.error("Can't create")
//     next(err)
//   }
// })

module.exports = router;
