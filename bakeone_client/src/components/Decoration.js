// src/components/Decoration.js
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Decoration = () => {
  const cardData = [
    { title: 'Sprinkles', text: 'Colorful sprinkles for fun and festive bakes.' },
    { title: 'Icing', text: 'Smooth icing for decorating cakes and cookies.' },
    { title: 'Fondant', text: 'Flexible fondant for creating detailed designs.' },
  ];

  return (
    <section id="decoration" style={{ padding: '20px 0' }}>
      <h2>Decoration</h2>
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

export default Decoration;
