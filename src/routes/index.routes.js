const { Router } = require("express");

const { indexdb } = require("../controllers/index.controllers");

const router = Router();

router.get("/db", indexdb);

module.exports = router;
