const { Client } = require("pg");

// query database
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "employees",
  password: "password",
  port: 5432,
});

client.connect();

module.exports = { client };
