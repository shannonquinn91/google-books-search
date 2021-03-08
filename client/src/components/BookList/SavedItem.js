import React from 'react';
import {Container, Row, Col} from '../Grid';
import Cover from '../Cover/Cover';

function SavedItem({title, author, cover, description, href, deleteBook}) {
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
                    <Col size="xs-2 sm-1">
                        <a  rel="noopener noreferrer" target="_blank" href={href} style={{marginBottom: ".5rem"}} type="button" className="btn btn-info">View on Google Books</a>
                        <button onClick={deleteBook} type="button" className="btn btn-primary">Delete from My List</button>

                    </Col>
                </Row>
            </Container>
        </li>
    )
}

export default SavedItem;