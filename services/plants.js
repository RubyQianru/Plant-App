const db = require('./db');
const helper = require('../helper');
const config = require("../.gitignore/.gitignore");

async function getMultiple(table){
  const totalRows = await db.query(`SELECT COUNT(*) AS total FROM ${table}`);
  const totalRecords = totalRows[0].total;

  const totalPages = Math.ceil(totalRecords / config.listPerPage);
  const lastPage = totalPages-1;

  const offset = helper.getOffset(lastPage, config.listPerPage);
  const rows = await db.query(
    `SELECT id, humidity, sunlight, temperature, time
    FROM ${table}
    LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page: lastPage};

  return {
    data,
    meta
  }
}

async function create(table, humidity){
    const result = await db.query(
      `INSERT INTO ${table} 
      (humidity) 
      VALUES 
      (${humidity})`
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