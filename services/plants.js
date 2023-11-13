const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, humidity, temperature 
    FROM plant LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(data){
    const result = await db.query(
      `INSERT INTO plant 
      (humidity, temperature) 
      VALUES 
      ('${data.humidity}, ${data.temperature})`
    );
  
    let message = 'Error in creating plant';
  
    if (result.affectedRows) {
      message = 'Plant created successfully';
    }
  
    return {message};
  }

  async function update(id, data){
    const result = await db.query(
      `UPDATE plant
      SET humidity=${data.humidity}, temperature=${data.temperature}
      WHERE id=${id}` 
    );
  
    let message = 'Error in updating plant';
  
    if (result.affectedRows) {
      message = 'Plant updated successfully';
    }
  
    return {message};
  }

module.exports = {
  getMultiple,
  create,
  update
}