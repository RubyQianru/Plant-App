const db = require('./db');
const helper = require('../helper');
const config = require("../.gitignore/.gitignore");

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, humidity, temperature 
    FROM plants
    ORDER BY id DESC
    LIMIT ${offset},${config.listPerPage}`
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
      `INSERT INTO plants 
      (humidity, temperature) 
      VALUES 
      (${data}, ${data})`
    );
    let message = 'Error in creating plant';
    if (result.affectedRows) {
      message = 'Plant created successfully';
    }
    return {message};
  }

module.exports = {
  getMultiple,
  create
}