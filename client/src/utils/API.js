import axios from 'axios';

//const apiKey = axios.get('/APIkey');

const API = {
    searchBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDeehm96IVTyladY-nStngaIu5JkGjoN_Y`)
    },

    saveBook: function(book) {
        return axios.post('/save', {data: book})
    },

    myList: function() {
        return axios.get('/myList')
    }
}

export default API;