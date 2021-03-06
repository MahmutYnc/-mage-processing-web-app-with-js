const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  bookName: {
    type: String,
    required: true,
  },

  isbnNumber: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
