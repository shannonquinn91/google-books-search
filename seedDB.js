const mongoose = require('mongoose');
const db = require('./models/Book')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const seedDB = [
    {
        title: "Book Title 1",
        authors: ["auth 1", "auth2"],
        description: "desc 1",
        image: "https://placehold.it/300x300",
        link: "https://www.google.com"
    },
    {
        title: "Book Title 2",
        authors: ["auth 1"],
        description: "desc 2",
        image: "https://placehold.it/300x300",
        link: "https://www.nhiaa.org"
    },
    {
        title: "Book Title 3",
        authors: ["auth2"],
        description: "desc 3",
        image: "https://placehold.it/300x300",
        link: "https://www.amazon.com"
    }
]

db.insertMany(seedDB)
    .then(data => {
        console.log(data + " records inserted.");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    })