import axios from 'axios';

//Google Books API
//const APIkey = process.env.APIkey;



export default {
    test: function() {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=matilda&key=AIzaSyDeehm96IVTyladY-nStngaIu5JkGjoN_Y");
    },

    search: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDeehm96IVTyladY-nStngaIu5JkGjoN_Y`)
    }
}