const express = require("express");
const Route = express.Router();
const {
  getAllBooks,
  insertBook,
  deleteBook,
  updateBook
} = require("../controller/books");

Route.get("/", getAllBooks);
Route.post("/", insertBook);
Route.delete("/:book_id", deleteBook);
Route.put("/:book_id", updateBook);

module.exports = Route;
