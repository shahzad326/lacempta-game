// accountModel.js
const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now, // Set the default value to the current date and time
  },
  liebelledeerectre: {
    type: String,
    required: true,
  },
  numeropiece: {
    type: String,
  },
  journal: {
    type: String,
    required: true,
  },
  compte: {
    type: String,
    required: true,
  },
  intutleducompte: {
    type: String,
    required: true,
  },
  debit: {
    type: String,
  },
  credit: {
    type: String,
  },

  // Add other fields as needed for Debit, Credit, Solde Debit, Solde Credit, etc.
});

const Table = mongoose.model("Table", tableSchema);

module.exports = Table;
