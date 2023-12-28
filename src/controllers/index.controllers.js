const { client } = require("../db");

const indexdb = async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM employees");
    console.log(result.rows);
    return res.json(result.rows);
  } catch (error) {
    console.error("Error al conectar base de datos");
    res.status(500).send("Error al conectar base de datos");
  }
};

module.exports = { indexdb };
