import axios from 'axios';

//Google Books API
//const APIkey = process.env.APIkey;


export default {
    search: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?&key=AIzaSyDeehm96IVTyladY-nStngaIu5JkGjoN_Y?&p=", {params: {q: query}});
    }
}