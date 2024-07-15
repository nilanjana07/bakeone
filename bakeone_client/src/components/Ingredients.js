// src/components/Ingredients.js
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import cocoa from '../assets/dutch_cocoa_powder1-be8de511d19c4b1c981a360a42b8293d.jpg';
import butter from '../assets/106083916.webp';
import sugar from '../assets/sugar-shutterstock_615908132.jpg';

const Ingredients = () => {
  const cardData = [
    { title: 'Cocoa Powder', text: 'High-quality flour for all your baking needs.', image: cocoa },
    { title: 'Sugar', text: 'Pure cane sugar to sweeten your recipes.', image: sugar },
    { title: 'Butter', text: 'Creamy butter for rich and flavorful bakes.', image: butter },
  ];

  return (
    <section id="ingredients" style={{ padding: '20px 0' }}>
      <h2>Ingredients</h2>
      <Row>
        {cardData.map((card, index) => (
          <Col key={index} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={card.image} alt={card.title} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Ingredients;
