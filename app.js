const express = require("express");
const dotenv = require("dotenv");

const homeRoute = require("./routes/homeRoute");

dotenv.config();

const app = express();

app.use(homeRoute);

module.exports = app;