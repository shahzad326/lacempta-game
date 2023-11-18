const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const Table = require("../models/tableModel");

// Create a new account
exports.createTable = catchAsyncErrors(async (req, res, next) => {
  const {
    date,
    liebelledeerectre,
    numeropiece,
    journal,
    compte,
    intutleducompte,
    debit,
    credit,
  } = req.body;

  if (!liebelledeerectre || !intutleducompte) {
    return next(
      new ErrorHandler("Please provide valid data for journal and liebele", 400)
    );
  }

  try {
    // Create a new account
    const newTable = new Table({
      date: date || Date.now(), // If date is not provided, set it to the current date and time
      liebelledeerectre,
      numeropiece,
      journal,
      compte,
      intutleducompte,
      debit,
      credit,
    });

    // Save the account to the database
    await newTable.save();

    res.status(201).json({
      status: "success",
      data: newTable,
    });
  } catch (err) {
    // Handle any errors that occur during the database operation
    console.error(err);

    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});

// Get all accounts
exports.getAllTable = catchAsyncErrors(async (req, res, next) => {
  try {
    const accounts = await Table.find();

    res.status(200).json({
      status: "success",
      data: accounts,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});
