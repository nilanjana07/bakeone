// src/components/Utensils.js
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Utensils = () => {
  const cardData = [
    { title: 'Mixing Bowl', text: 'Durable mixing bowls for every recipe.' },
    { title: 'Whisk', text: 'Perfect for mixing and blending ingredients.' },
    { title: 'Baking Pan', text: 'Non-stick baking pans for easy release.' },
  ];

  return (
    <section id="utensils" style={{ padding: '20px 0' }}>
      <h2>Utensils</h2>
      <Row>
        {cardData.map((card, index) => (
          <Col key={index} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="..." alt="..." />
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

export default Utensils;
