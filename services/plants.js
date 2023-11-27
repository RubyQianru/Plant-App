const db = require('./db');
const helper = require('../helper');
const config = require("../.gitignore/.gitignore");

async function getMultiple(){
  const totalRows = await db.query('SELECT COUNT(*) AS total FROM plants');
  const totalRecords = totalRows[0].total;

  const totalPages = Math.ceil(totalRecords / config.listPerPage);
  const lastPage = totalPages-1;

  const offset = helper.getOffset(lastPage, config.listPerPage);
  const rows = await db.query(
    `SELECT id, humidity, temperature 
    FROM plants
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