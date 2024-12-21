
import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <Link to={`/dish/${item.link}`} className="cart-item-name">
                    {item.name}
                  </Link>
                  <div className="cart-item-price">₹{item.price}</div>
                  <button className="cart-remove-button" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <span>Total: ₹{calculateTotal()}</span>
            <button className="cart-checkout-button">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;


