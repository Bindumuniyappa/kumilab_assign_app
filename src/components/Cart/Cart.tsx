import React from 'react';
import './Cart.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Cart: React.FC = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <div className="cart-container">
        <AiOutlineShoppingCart className="icon" />
        <span className="count-container">{cart.length}</span>
      </div>
    </div>
  );
};

export default Cart;

