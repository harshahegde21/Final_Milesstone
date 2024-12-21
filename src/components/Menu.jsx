import React, { useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import gobi from '../assets/Gobi.jpg';
import stuffedMushrooms from '../assets/stmush.jpg';
import garlicBread from '../assets/garlic-bread.jpg';
import grilledSalmon from '../assets/grilled-salmon.jpg';
import chickenAlfredo from '../assets/chicken-alfredo.jpg';
import vegetarianLasagna from '../assets/vegetarian-lasagna.jpg';
import tiramisu from '../assets/tiramisu.jpg';
import cheesecake from '../assets/cheese-cake.jpg';
import chocolateMousse from '../assets/chocolate-mousse.jpg';
import redWine from '../assets/redwine.jpeg';
import mojito from '../assets/mojito.jpg';
import icedTea from '../assets/iced-tea.jpg';

const Menu = ({ cart, addToCart }) => {
  const menuItems = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Gobi Manchurian', image: gobi, link: 'Gobi', price: 100 },
        { name: 'Stuffed Mushrooms', image: stuffedMushrooms, link: 'stuffed-mushrooms', price: 300 },
        { name: 'Garlic Bread', image: garlicBread, link: 'garlic-bread', price: 150 },
      ],
    },
    {
      category: 'Entrees',
      items: [
        { name: 'Grilled Salmon', image: grilledSalmon, link: 'grilled-salmon', price: 500 },
        { name: 'Chicken Alfredo', image: chickenAlfredo, link: 'chicken-alfredo', price: 450 },
        { name: 'Vegetarian Lasagna', image: vegetarianLasagna, link: 'vegetarian-lasagna', price: 400 },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Tiramisu', image: tiramisu, link: 'tiramisu', price: 200 },
        { name: 'Cheesecake', image: cheesecake, link: 'cheesecake', price: 250 },
        { name: 'Chocolate Mousse', image: chocolateMousse, link: 'chocolate-mousse', price: 300 },
      ],
    },
    {
      category: 'Drinks',
      items: [
        { name: 'Red Wine', image: redWine, link: 'red-wine', price: 600 },
        { name: 'Mojito', image: mojito, link: 'mojito', price: 300 },
        { name: 'Iced Tea', image: icedTea, link: 'iced-tea', price: 150 },
      ],
    },
  ];

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {menuItems.map((section, sectionIndex) => (
        <div key={sectionIndex} className="menu-section">
          <h3 className="menu-category">{section.category}</h3>
          <div className="menu-cards">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="menu-card">
                <img src={item.image} alt={item.name} className="menu-card-image" />
                <div className="menu-card-content">
                  <Link to={`/dish/${item.link}`} className="menu-item-name">
                    {item.name}
                  </Link>
                  <div className="menu-item-price">₹{item.price}</div>
                  <button className="menu-add-to-cart" onClick={() => addToCart(item)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;






