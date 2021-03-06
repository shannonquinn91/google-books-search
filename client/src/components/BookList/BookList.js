import React from 'react';
import {Container, Row, Col} from '../Grid';
import Cover from '../Cover/Cover';

//Created a book list (container) and book item (for displaying book data)

export function BookList({children}) {
    return <ul className="list-group">{children}</ul>
}

export function BookItem({title, author, cover, description}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <h3>{title}</h3>
                        <p>by: {author}</p>
                        <Cover src={cover || "https://placehold.it/300x300"} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <p>{description}</p>
                    </Col>
                </Row>
            </Container>
        </li>
    )
}

export default BookList;