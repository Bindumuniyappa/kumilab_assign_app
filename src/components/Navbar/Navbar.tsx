import React from 'react';
import './Navbar.css';
import Cart from '../Cart/Cart'; 

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">E-Commerce</div>
      <Cart />
    </nav>
  );
};

export default Navbar;
