import React, {useState} from 'react';
import Input from '../Input/Input';
import Jumbotron from '../Jumbotron/Jumbotron';
import Nav from '../Nav/Nav';
import API from '../../utils/API';
import {Container, Row, Col} from '../Grid';
import Button from '../Input/Button';
import { BookItem } from '../BookList/BookList';
import BookList from '../BookList/BookList';

function Search() {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");

    const handleInputChange = event => {
        const search = event.target.value;
        //console.log(search)
        //const searchFormat = search.split(" ").join("+");
        setQuery(search);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(query)
        API.searchBooks(query)
            .then(res => setBooks(res.data.items))
            .catch(err => console.log(err)); 
            
    }

    const saveBook = (event) => {
        event.preventDefault();
        console.log('button works line 32')       
    }

    return (
        <div className="App">
        <Nav />
            <div className="App-header">
                <Jumbotron />
               <Container>
                   <Row>
                       <Col size="12">
                       <form>
                        <Container>
                            <Row>
                                <Col size="xs-9 sm-10">
                                    <Input 
                                    name="bookSearch"
                                    onChange={handleInputChange}
                                    value={query}
                                    placeholder="Search for a book"
                                    />
                                </Col>
                                <Col size="xs-3 sm-2">
                                    <Button
                                    onClick={handleSubmit}
                                    type="success"
                                    className="input-lg">
                                        Search
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                       </form>
                       </Col>
                   </Row>
                   <br></br>
                   <Row>
                       <Col size="xs-12">
                           {!books.length ? (
                               <h1 className="text-center">No Books Found</h1>
                           ) : (
                               <BookList>
                                   {books.map(book => {
                                       return (
                                           <BookItem
                                            key={book.id}
                                            title={book.volumeInfo.title}
                                            author={book.volumeInfo.authors}
                                            cover={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail}
                                            description={book.volumeInfo.description}
                                            href={book.volumeInfo.previewLink}
                                            onClick={saveBook}
                                            />
                                       )
                                   })}
                               </BookList>
                           )
                        }
                       </Col>
                   </Row>
               </Container>
            </div>
        </div>
    )
}

export default Search;