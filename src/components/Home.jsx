import React, { useState, useEffect } from "react";
import "./Home.css";

const carouselItems = [
  {
    name: "Special Pizza",
    image: require("../assets/pizza.jpg"),
    fact: "Originated in Naples, Italy.",
    ingredients: "Tomatoes, Mozzarella, Basil, Olive Oil",
  },
  {
    name: "Seasonal Pasta",
    image: require("../assets/pasta-primavera.jpg"),
    fact: "One of the oldest dishes in Italian cuisine.",
    ingredients: "Wheat, Eggs, Seasonal Vegetables, Parmesan",
  },
  {
    name: "Refreshing Drinks",
    image: require("../assets/mojito.jpg"),
    fact: "Cuba's favorite summer drink.",
    ingredients: "Mint, Lime, Sugar, Sparkling Water",
  },
  {
    name: "Garlic Bread",
    image: require("../assets/garlic-bread.jpg"),
    fact: "A classic appetizer loved by many.",
    ingredients: "Bread, Garlic, Butter, Parsley",
  },
  
  {
    name: "Stuffed Mushrooms",
    image: require("../assets/stmush.jpg"),
    fact: "A savory bite-sized treat.",
    ingredients: "Mushrooms, Cream Cheese, Garlic, Parmesan, Herbs",
  },
  
  {
    name: "Grilled Salmon",
    image: require("../assets/grilled-salmon.jpg"),
    fact: "A healthy and flavorful entree.",
    ingredients: "Salmon, Lemon, Garlic, Olive Oil, Dill",
  },
  
  {
    name: "Vegetarian Lasagna",
    image: require("../assets/vegetarian-lasagna.jpg"),
    fact: "A hearty and vegetarian-friendly pasta dish.",
    ingredients: "Lasagna Sheets, Tomato Sauce, Ricotta, Spinach, Mozzarella",
  },
  {
    name: "Cheese Delight",
    image: require("../assets/cheese-cake.jpg"),
    fact: "Perfect for tea lovers craving sweetness.",
    ingredients: "Black Tea, Lemon, Honey, Ice",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slideNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const slidePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setCurrentIndex(
      (prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1)
    );

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setInterval(slideNext, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="home">
      <div className="home-content">
        <h1 className="welcome-text">WELCOME</h1>
        <h2 className="sub-text">to our Restaurant</h2>
      </div>
      <div className="carousel-container">
        <div className="info-box left">
          <h3>Fun Fact</h3>
          <p>{carouselItems[currentIndex]?.fact}</p>
        </div>

        <div className="carousel">
          <div
            className="carousel-slides"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {carouselItems.map((item, index) => (
              <div
                className={`slide ${index === currentIndex ? "active" : ""}`}
                key={index}
              >
                <img src={item.image} alt={item.name} />
                <div className="carousel-text">
                  <h3>{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-button left" onClick={slidePrev}>
            &#9664;
          </button>
          <button className="carousel-button right" onClick={slideNext}>
            &#9654;
          </button>
        </div>

        <div className="info-box right">
          <h3>Ingredients</h3>
          <p>{carouselItems[currentIndex]?.ingredients}</p>
        </div>
      </div>
    </div>
  );
}


