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
    const [query, setQuery] = useState();

    const handleInputChange = event => {
        const {search} = event.target;
        setQuery(search);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(query)
        API.search(query)
            .then(res => setBooks(res.data.items))
            .catch(err => console.log(err)); 
            
    }

    
    return (
        <div className="App">
        <Nav />
            <div className="App-header">
                <Jumbotron />
               <Container>
                   <Row>
                        <Container>
                            <Row>
                                <Col size="xs-9 sm-10">
                                    <Input 
                                    name="bookSearch"
                                    onChange={handleInputChange}
                                    value={query}
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
                                            cover={book.volumeInfo.imageLinks.smallThumbnail}
                                            description={book.volumeInfo.description}
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