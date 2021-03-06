const router = require('express').Router();
const db = require('../models');


router.get('/getApi', (req, res) => res.json("https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyDeehm96IVTyladY-nStngaIu5JkGjoN_Y"))

router.get('/saved', (req, res) => {
    db.Book.findAll()
        .then(books => res.json(books))
        .catch(err => res.status(422).end());
})

module.exports = router;