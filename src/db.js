const { Client } = require("pg");

const {DB_DATABASE, DB_LOCALHOST, DB_PASSWORD, DB_PORT, DB_USER} = require("./config")

// query database
const client = new Client({
  user: DB_USER,
  host: DB_LOCALHOST,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  port: DB_PORT,
});

client.connect();

module.exports = { client };
