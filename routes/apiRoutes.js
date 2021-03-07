const router = require('express').Router();
const db = require('../models');


router.get('/myList', (req, res) => {
    db.Book.findAll()
        .then(books => res.json(books))
        .catch(err => res.status(422).end());
})

router.route('/save').post((req, res) => {
    const book = req.body.items.volumeInfo;
    db.Book.insert({
        title: book.title,
        authors: book.authors,
        description: book.description,
        image: book.imageLinks && book.imageLinks.smallThumbnail,
        link: book.previewLink
    })
        .then(books => res.json(books))
        .catch(err => res.status(422).end());
})

module.exports = router;