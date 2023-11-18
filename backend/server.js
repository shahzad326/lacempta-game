const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error ${err.message}`);
  console.log(`Shutting down the server due to uncaught Exception`);
  process.exit(1);
});

// Config
dotenv.config({ path: "config/config.env" });

// Connectio DAtaBase
connectDB();
const PORT = process.env.PORT || 5000;
const server = app.listen(5000, () => {
  PORT,
    console.log(
      `Server is running ${process.env.NODE_ENV} mode on port ${PORT}`
    );
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down server due to unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
