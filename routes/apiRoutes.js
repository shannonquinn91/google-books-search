const router = require('express').Router();
const db = require('../models');


router.get('/myList', (req, res) => {
    db.Book.find({})
        .then(books => res.json(books))
        .catch(err => res.status(422).end());
})

router.route('/save').post((req, res) => {
    db.Book.insert(req.body)
        .then(books => res.json(books))
        .catch(err => res.status(422).end());
})

module.exports = router;