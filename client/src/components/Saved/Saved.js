import React, {useEffect, useState} from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import Nav from '../Nav/Nav';
import {Container, Row, Col} from '../Grid';
import { BookItem } from '../BookList/BookList';
import BookList from '../BookList/BookList';
import API from '../../utils/API';
//

function Saved() {
    const [saved, setSaved] = useState();

    useEffect(() => {
        API.myList()
            .then(res => setSaved(res.data))
            .catch(err => console.log(err));
    })
    
    return (
        <div className="App">
        <Nav />
            <div className="App-header">
                <Jumbotron />
               <Container>
                   <Row>
                       <Col size="xs-12">
                           {saved.length ? (
                               <h1 className="text-center">You have no saved books in your list.</h1>
                           ) : (
                               <BookList>
                                   {saved.map(book => {
                                       return(
                                           <BookItem
                                            key={book._id}
                                            title={book.title}
                                            author={book.authors}
                                            cover={book.image}
                                            description={book.description}
                                            href={book.link}
                                            onClick={() => {console.log("working")}}
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