// src/components/Home.js
import React from 'react';
import Ingredients from './Ingredients';
import Utensils from './Utensils';
import Decoration from './Decoration';

const Home = () => {
  return (
    <div className="about" style={{ padding: '20px' }}>
      <section id="home">
        <h2>About Bakeone</h2>
        <p>Bakeone is a passionate bakery shop that started with a love for baking. Our mission is to provide the best quality ingredients, utensils, and decorations to make your baking experience delightful and successful.</p>
      </section>
      <Ingredients />
      <Utensils />
      <Decoration />
    </div>
  );
}

export default Home;
