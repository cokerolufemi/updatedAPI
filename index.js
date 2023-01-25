//import express, body-parser
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const {
  listBooksController,
  createBookController,
  updateBookController,
  deleteBookController,
} = require("./controllers");
// Create express server instance
const server = express();
//Body-parser middleware
server.use(bodyParser.json());
//We do get, post, put, delete route
//View all books[get method]
server.get("/books/:id?", listBooksController);
//Create book[post method]
server.post("/book", createBookController);
//Update book[put method]
server.put("/book", updateBookController);
//Delete book[delete method]
server.delete("/book", deleteBookController);
//Start server
mongoose.set("strictQuery", false);
//Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://cokerolufemigbolahan:gbossey1234@cluster0.lqes6k1.mongodb.net/express_db?retryWrites=true&w=majority"
  )
  .then((details) => {
    server.listen(3000, () => console.log("Server connection is established!"));
    console.log("Connected to the Database");
  })
  .catch((err) => console.log(err));
