const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
const cors = require("cors");
app.use(cors());

const errorMiddleware = require("./middleware/error");

// Rotues Imports

const user = require("./routes/userRoute");
const account = require("./routes/acountRoute");
const table = require("./routes/tableRoute");

app.use("/api/v2", user);
app.use("/api/v1", account);
app.use("/api/v3", table);

// Middleware For Errors
app.use(errorMiddleware);

module.exports = app;
