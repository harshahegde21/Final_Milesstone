// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">My Restaurant</div>
//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/menu">Menu</Link></li>
//         <li><Link to="/reservations">Reservations</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a Navbar CSS file for styles
import Cart from './Cart';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My Restaurant</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li> {/* About Us Link */}
      </ul>
    </nav>
  );
};

export default Navbar;

