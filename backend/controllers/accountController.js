const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const Account = require("../models/accountModel");

// Create a new account
exports.createAccount = catchAsyncErrors(async (req, res, next) => {
  const {
    date,
    journaux,
    numeropece,
    numerocompte,
    liebeleerectre,
    debit,
    credit,
  } = req.body;

  if (!journaux || !liebeleerectre) {
    return next(
      new ErrorHandler("Please provide valid data for journal and liebele", 400)
    );
  }

  try {
    // Create a new account
    const newAccount = new Account({
      date: date || Date.now(), // If date is not provided, set it to the current date and time
      journaux,
      numeropece,
      numerocompte,
      liebeleerectre,
      debit,
      credit,
    });

    // Save the account to the database
    await newAccount.save();

    res.status(201).json({
      status: "success",
      data: newAccount,
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
exports.getAllAccounts = catchAsyncErrors(async (req, res, next) => {
  try {
    const accounts = await Account.find();

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

// Get account by ID
exports.getAccountById = catchAsyncErrors(async (req, res, next) => {
  const accountId = req.params.id;

  try {
    const account = await Account.findById(accountId);

    if (!account) {
      return next(new ErrorHandler("Account not found", 404));
    }

    res.status(200).json({
      status: "success",
      data: account,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});
