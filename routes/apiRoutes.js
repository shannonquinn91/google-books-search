const router = require('express').Router();
const db = require('../models');


router.get('/api/myList', (req, res) => {
    db.Book.findAll({})
        .then(result => res.json(result))
        .catch(err => res.status(422).end());
})

router.route('/api/save').post((req, res) => {
    db.Book.insert(req.body)
        .then(books => res.json(books))
        .catch(err => res.status(422).end());
})

module.exports = router;