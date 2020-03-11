const express = require("express");
const Route = express.Router();

const books = require("./routes/books");
const auth = require("./routes/auth");
const member = require("./routes/member");
const borrow = require("./routes/borrow");

Route.use("/books", books);
Route.use("/auth", auth);
Route.use("/member", member);
Route.use("/borrow", borrow);

module.exports = Route;
