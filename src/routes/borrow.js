const express = require("express");
const Route = express.Router();

const {
  createBorrowingStatus,
  deleteBorrowingStatus,
  getAllBorrowingStatus,
  getBorrowingStatus,
  updateBorrowingStatus
} = require("../controller/borrow");

Route.post("/", createBorrowingStatus);
Route.delete("/:borrow_id", deleteBorrowingStatus);
Route.get("/", getAllBorrowingStatus);
Route.get("/:borrow_id", getBorrowingStatus);
Route.put("/:borrow_id", updateBorrowingStatus);

module.exports = Route;
