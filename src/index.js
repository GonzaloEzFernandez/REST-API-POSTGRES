// TODO: express-promise-router

const express = require("express");
const app = express();
const employeesRoutes = require("./routes/employees.routes");
const indexRoutes = require("./routes/index.routes");
const { PORT } = require("./config");

// middleware
app.use(express.json());
app.use(indexRoutes);
app.use("/api/", employeesRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "end point not found",
  });
});

// listen
app.listen(PORT);
console.log(`Listen on port ${PORT}`);
