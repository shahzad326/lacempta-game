const express = require("express");

const { createTable, getAllTable } = require("../controllers/tableController");

const router = express.Router();

router.route("/createTable").post(createTable);
router.route("/getAllTable").get(getAllTable);

module.exports = router;
