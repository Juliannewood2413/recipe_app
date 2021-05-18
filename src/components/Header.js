import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

export default function Header() {
    return (

        <Jumbotron fluid className="jumbotron">
          <Container className="container">
            <h1 className="headerh1">Recipe App</h1>
            <p className="headerpara">
              Simple recipe app, just search, decide, and dinner is done!
            </p>
          </Container>
        </Jumbotron>

    )
}