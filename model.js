//Import mongoose
const mongoose = require("mongoose");
//Create a new book Schema
const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
});
const BookModel = mongoose.model("Book", BookSchema);
module.exports = BookModel;
