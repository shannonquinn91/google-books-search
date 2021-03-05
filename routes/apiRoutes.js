const express = require('express');
const app = express();

app.get('/getApi', (req, res) => res.json("https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyDeehm96IVTyladY-nStngaIu5JkGjoN_Y"))
