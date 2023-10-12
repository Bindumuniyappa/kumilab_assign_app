import React from 'react';
import './Cart.css';
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Cart: React.FC = () => {
  return (
    <div className="cart">
      <div className='cart-container'>
      <AiOutlineShoppingCart className="icon"/>
      <span className='count-container'>0</span>
      </div>
    </div>
  );
};

export default Cart;
