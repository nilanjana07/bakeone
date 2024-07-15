// src/components/Navbar.js
import React from 'react';
import "../App.css";
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" style={{ backgroundColor: '#ffe6e6' }} className='navbar'>
      <Navbar.Brand href="#home">Bakeone</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#ingredients">Ingredients</Nav.Link>
          <Nav.Link href="#utensils">Utensils</Nav.Link>
          <Nav.Link href="#decoration">Decoration</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
