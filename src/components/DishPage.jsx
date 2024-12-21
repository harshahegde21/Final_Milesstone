import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
import './DishPage.css';

const dishData = {
  'Gobi': {
    name: 'Gobi',
    ingredients: 'Cauliflower,onions, capsicum, Garlic, cornflour',
    description: 'A classic food.',
    image: gobi,
  },
  'stuffed-mushrooms': {
    name: 'Stuffed Mushrooms',
    ingredients: 'Mushrooms, Cream Cheese, Garlic, Parmesan',
    description: 'Savory mushrooms filled with a creamy cheese mixture, perfect as an appetizer.',
    image: stuffedMushrooms,
  },
  'garlic-bread': {
    name: 'Garlic Bread',
    ingredients: 'Bread, Butter, Garlic, Parsley, Parmesan',
    description: 'Crispy bread with a delicious garlic butter spread, baked to perfection.',
    image: garlicBread,
  },
  'grilled-salmon': {
    name: 'Grilled Salmon',
    ingredients: 'Salmon, Olive Oil, Lemon, Garlic, Herbs',
    description: 'Perfectly grilled salmon served with a touch of lemon and fresh herbs.',
    image: grilledSalmon,
  },
  'chicken-alfredo': {
    name: 'Chicken Alfredo',
    ingredients: 'Chicken, Fettuccine, Cream, Parmesan, Garlic',
    description: 'Creamy alfredo sauce paired with tender chicken and fettuccine pasta.',
    image: chickenAlfredo,
  },
  'vegetarian-lasagna': {
    name: 'Vegetarian Lasagna',
    ingredients: 'Pasta, Ricotta, Spinach, Tomato Sauce, Mozzarella',
    description: 'A vegetarian twist on a classic lasagna with spinach and ricotta cheese.',
    image: vegetarianLasagna,
  },
  tiramisu: {
    name: 'Tiramisu',
    ingredients: 'Ladyfingers, Coffee, Mascarpone, Cocoa Powder',
    description: 'A rich, creamy Italian dessert made with coffee-soaked ladyfingers and mascarpone.',
    image: tiramisu,
  },
  cheesecake: {
    name: 'Cheesecake',
    ingredients: 'Cream Cheese, Sugar, Graham Cracker Crust',
    description: 'A rich and creamy dessert with a buttery graham cracker crust.',
    image: cheesecake,
  },
  'chocolate-mousse': {
    name: 'Chocolate Mousse',
    ingredients: 'Chocolate, Heavy Cream, Sugar, Eggs',
    description: 'A light, creamy chocolate dessert with a rich flavor.',
    image: chocolateMousse,
  },
  'red-wine': {
    name: 'Red Wine',
    ingredients: 'Grapes',
    description: 'A full-bodied red wine with deep fruity notes.',
    image: redWine,
  },
  mojito: {
    name: 'Mojito',
    ingredients: 'Rum, Mint, Lime, Sugar, Soda Water',
    description: 'A refreshing cocktail with rum, mint, and lime.',
    image: mojito,
  },
  'iced-tea': {
    name: 'Iced Tea',
    ingredients: 'Tea, Lemon, Ice',
    description: 'A refreshing iced tea with a hint of lemon.',
    image: icedTea,
  },
};

const DishPage = () => {
  const { dishId } = useParams();
  const dish = dishData[dishId];

  if (!dish) {
    return <h2>Dish Not Found</h2>;
  }

  return (
    <div className="dish-page">
      <div className="dish-container">
        <img src={dish.image} alt={dish.name} className="dish-image" />
        <div className="dish-info">
          <h2>{dish.name}</h2>
          <h3>Ingredients:</h3>
          <p>{dish.ingredients}</p>
          <h3>Description:</h3>
          <p>{dish.description}</p>
          <Link to="/menu">
            <button className="back-btn">Back to Menu</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DishPage;






