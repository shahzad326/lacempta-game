// accountModel.js
const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now, // Set the default value to the current date and time
  },
  journaux: {
    type: String,
    required: true,
  },
  numeropece: {
    type: String,
  },
  numerocompte: {
    type: Number,
    required: true,
  },

  liebeleerectre: {
    type: String,
    required: true,
  },
  debit: {
    type: Number,
    required: true,
  },
  credit: {
    type: Number,
    required: true,
  },

  // Add other fields as needed for Debit, Credit, Solde Debit, Solde Credit, etc.
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
