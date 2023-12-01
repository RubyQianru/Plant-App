const db = require('./db');
const helper = require('../helper');
const config = require("../.gitignore/.gitignore");

async function getMultiple(){
  const totalRows = await db.query('SELECT COUNT(*) AS total FROM onion');
  const totalRecords = totalRows[0].total;

  const totalPages = Math.ceil(totalRecords / config.listPerPage);
  const lastPage = totalPages-1;

  const offset = helper.getOffset(lastPage, config.listPerPage);
  const rows = await db.query(
    `SELECT id, humidity, sunlight, temperature, time
    FROM onion
    LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page: lastPage};

  return {
    data,
    meta
  }
}

async function create(data){
    const result = await db.query(
      `INSERT INTO onion 
      (humidity) 
      VALUES 
      (${data})`
    );
    let message = 'Error in updating data';
    if (result.affectedRows) {
      message = 'Data updated successfully';
    }
    return {message};
  }

module.exports = {
  getMultiple,
  create
}