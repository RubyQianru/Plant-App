const db = require('./db');
const helper = require('../helper');
const config = require("../.gitignore/.gitignore");

async function getMultiple(page=1){

  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM plant_guides
    LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

// async function create(data){
//     const result = await db.query(
//       `INSERT INTO onion 
//       (humidity) 
//       VALUES 
//       (${data})`
//     );
//     let message = 'Error in updating data';
//     if (result.affectedRows) {
//       message = 'Data updated successfully';
//     }
//     return {message};
//   }

module.exports = {
  getMultiple,
//   create
}