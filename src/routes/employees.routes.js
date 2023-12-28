const { Router } = require("express");
const router = Router();
const {
  getemployees,
  getemployee,
  addEmployees,
  updateEmployess,
  deleteEmployes,
} = require("../controllers/employees.controllers");

router.get("/employees", getemployees);

router.get("/employees/:id", getemployee);

router.post("/employees", addEmployees);

router.patch("/employees/:id", updateEmployess);

router.delete("/employees/:id", deleteEmployes);

module.exports = router;
