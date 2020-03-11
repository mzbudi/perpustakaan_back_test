const express = require("express");
const Route = express.Router();

const { userLogin } = require("../controller/auth");

Route.use("/login", userLogin);

module.exports = Route;
