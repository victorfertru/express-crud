require("dotenv").config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const errorHandler = require("./middleware/errorHandler");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(errorHandler);

var mainRouter = require("./routes/main");
var usersRouter = require("./routes/users");

app.use("/", mainRouter);
app.use("/users", usersRouter);

module.exports = app;
