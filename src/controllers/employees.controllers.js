const { client } = require("../db");

const getemployees = async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM employees");
    return res.json(result.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getemployee = async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM employees WHERE id = $1", [
      req.params.id,
    ]);

    if (result.rows.length <= 0)
      return res.status(404).json({ message: "Empleado no encontrado" });

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).send("Something goes wrong");
  }
};

const addEmployees = async (req, res) => {
  const { nombre, apellido, edad } = req.body;
  try {
    // Insertar el nuevo empleado y utilizar RETURNING para obtener los valores recién insertados
    const result = await client.query(
      "INSERT INTO employees (nombre, apellido, edad) VALUES ($1, $2, $3) RETURNING *",
      [nombre, apellido, edad]
    );

    // Verificar si se insertaron filas
    if (result.rowCount > 0) {
      return res.json({ result: result.rows[0] });
    } else {
      return res.status(500).send("Error al agregar empleado");
    }
  } catch (error) {
    res.status(500).send("Something goes wrong");
  }
};

const updateEmployess = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, edad } = req.body;

  try {
    const result = await client.query(
      "UPDATE employees SET nombre = COALESCE($1, nombre), apellido = COALESCE($2, apellido), edad = COALESCE($3, edad) WHERE id = $4 RETURNING *",
      [nombre, apellido, edad, id]
    );
    if (result.rowCount === 0)
      return res.status(404).json({ message: "Empleado no encontrado" });

    res.json({ update: result.rows[0] });
  } catch (error) {
    res.status(500).send("Something goes wrong");
  }
};

const deleteEmployes = async (req, res) => {
  try {
    const result = await client.query(
      "DELETE FROM employees WHERE id = $1 RETURNING *",
      [req.params.id]
    );

    if (result.rowCount === 0)
      return res.send({ message: "No se econtro empleador" });

    res.json({ delete: result.rows[0] });
  } catch (error) {
    res.status(500).send("Something goes wrong");
  }
};

module.exports = {
  getemployees,
  getemployee,
  addEmployees,
  updateEmployess,
  deleteEmployes,
};
