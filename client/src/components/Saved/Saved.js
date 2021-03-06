import React from 'react';
import Input from '../Input/Input';
import Jumbotron from '../Jumbotron/Jumbotron';
import Nav from '../Nav/Nav';
import API from '../../utils/API';
import {Container, Row, Col} from '../Grid';
import Button from '../Input/Button';
import { BookItem } from '../BookList/BookList';
import BookList from '../BookList/BookList';

function Saved() {

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
                                    value={query}
                                    onChange={handleInputChange}
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
                   <Row>
                       <Col size="xs-12">
                           {!books.length ? (
                               <h1 className="text-center">No Books Found</h1>
                           ) : (
                               <BookList>
                                   {books.map(book => {
                                       return (
                                           <BookItem
                                            key={book.title}
                                            title={book.title}
                                            cover={book.cover}
                                            description={book.description}
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

export default Saved;