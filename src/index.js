const express = require("express");
const Route = express.Router();

const books = require("./routes/books");
const auth = require("./routes/auth");
const member = require("./routes/member");

Route.use("/books", books);
Route.use("/auth", auth);
Route.use("/member", member);

module.exports = Route;
