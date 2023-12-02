const db = require('./db');
const helper = require('../helper');
const config = require("../.gitignore/.gitignore");

async function getMultiple(table){

  const offset = helper.getOffset(1, config.listPerPage);
  const rows = await db.query(
    `SELECT id, humidity, sunlight, temperature, time
    FROM ${table}
    ORDER BY id DESC
    LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page: 1};

  return {
    data,
    meta
  }
}

const moment = require('moment');

async function getMultipleDates(table) {
  const sevenDaysAgo = moment().subtract(7, 'days').format('YYYY-MM-DD');

  const rows = await db.query(
    `SELECT id, humidity, sunlight, temperature, time
    FROM ${table}
    WHERE time >= '${sevenDaysAgo}'
    ORDER BY id DESC`
  );

  const totalDays = 7;
  let totalHumidity = 0;

  const humidityByDay = {};

  for (let i = 0; i < totalDays; i++) {
    const currentDate = moment().subtract(i, 'days').format('YYYY-MM-DD');
    humidityByDay[currentDate] = 0;
  }

  rows.forEach((row) => {
    const rowDate = moment(row.time).format('YYYY-MM-DD');
    humidityByDay[rowDate] = row.humidity;
    totalHumidity += row.humidity;
  });

  const averageHumidity = totalHumidity / totalDays;

  const data = Object.values(humidityByDay); 
  const meta = { averageHumidity };

  return {
    data,
    meta
  };
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
  getMultipleDates,
  create
}