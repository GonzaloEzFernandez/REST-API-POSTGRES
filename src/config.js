const { config } = require("dotenv");

config();

const PORT = process.env.PORT || 3000;
const DB_USER = process.env.DB_USER || "postgres";
const DB_LOCALHOST = process.env.DB_LOCALHOST || "localhost";
const DB_PASSWORD = process.env.DB_PASSWORD || "password";
const DB_DATABASE = process.env.DB_DATABASE || "employees";
const DB_PORT = process.env.DB_PORT || 5432

module.exports = { PORT, DB_USER, DB_LOCALHOST, DB_PASSWORD, DB_DATABASE,DB_PORT };
