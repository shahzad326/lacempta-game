const express = require("express");

const {
  createAccount,
  getAllAccounts,
  getAccountById,
} = require("../controllers/accountController");

const router = express.Router();

router.route("/createAccount").post(createAccount);
router.route("/getAccount").get(getAllAccounts);

module.exports = router;
