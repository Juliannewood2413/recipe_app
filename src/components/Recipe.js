import React from 'react';
// import style from './recipe.module.css'
import {Card, Button} from 'react-bootstrap';

export default function Recipe ({title, calories, image, ingredients, url}) {
    return(
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {ingredients.map(ingredient => (
                       <li> {ingredient.text} </li>
                    ))}
                    </Card.Text>
                <Button variant="primary" href={url} target="_blank">See the Recipe</Button>
                </Card.Body>
        </Card>
    )
}
