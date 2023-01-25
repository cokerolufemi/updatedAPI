//Import BookModel
const BookModel = require("./model.js");
//Creating all the controllers[get, post, update, put, delete]
//List all the books in the DB with listBooksController
const listBooksController = (req, res) => {
  const { id } = req.params;
  if (id) {
    BookModel.find({ _id: id })
      .then((books) => {
        res.json({ data: books });
      })
      .catch((err) => console.log(err));
  } else {
    BookModel.find()
      .then((books) => {
        res.json({ data: books });
      })
      .catch((err) => console.log(err));
  }
};
//Create a book in DB with createBookController
const createBookController = (req, res) => {
  const { title, author, description } = req.body;
  const book = new BookModel({
    title,
    author,
    description,
  });
  book
    .save()
    .then((details) => {
      res.json({ Data: "Created successfully", data: details });
    })
    .catch((err) => console.log(err));
};
//Update a book in the DB with updateBookController
const updateBookController = (req, res) => {
  const { id, title, author, description } = req.body;
  BookModel.findById(id)
    .then((book) => {
      if (book) {
        book.title = title;
        book.author = author;
        book.description = description;
        book.save();
        res.json({ message: "Updated book DB successfully!" });
      }
      res.json({ message: "Ooooh! Data cannot be updated" });
    })
    .catch((err) => console.log(err));
};
const deleteBookController = (req, res) => {
  const { id } = req.body;
  BookModel.findByIdAndRemove(id).then((deletedBook) => {
    if (deletedBook) {
      res.json({ message: "book has been deleted successfully!" });
      return;
    }
    res.json({ message: "book cannot be deleted from DB" });
  });
};
module.exports = {
  listBooksController,
  createBookController,
  updateBookController,
  deleteBookController,
};
