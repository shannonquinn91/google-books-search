const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    title: String,
    authors: Array,
    description: String,
    image: String,
    link: String
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;