const express = require("express");
const Route = express.Router();

const {
  getAllMembers,
  deleteMember,
  updateMember,
  createMember
} = require("../controller/member");

Route.get("/", getAllMembers);
Route.delete("/:member_id", deleteMember);
Route.put("/:member_id", updateMember);
Route.post("/", createMember);

module.exports = Route;
