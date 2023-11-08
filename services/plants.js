const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, humidity, temperature 
    FROM plant LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(plant){
    const result = await db.query(
      `INSERT INTO plant 
      (name, humidity, temperature) 
      VALUES 
      ('${plant.name}', ${plant.humidity}, ${plant.temperature})`
    );
  
    let message = 'Error in creating plant';
  
    if (result.affectedRows) {
      message = 'Plant created successfully';
    }
  
    return {message};
  }

  async function update(id, plant){
    const result = await db.query(
      `UPDATE plant
      SET name="${plant.name}", humidity=${plant.humidity}, temperature=${plant.temperature}
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