import React from 'react';
import './Cart.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Cart: React.FC = () => {
  
  const [itemLength, setItemLength] = useState(0);
  const cart = useSelector((state) =>state.cart);

  useEffect(() => {
    let ln = 0
    Object.values(cart).forEach((value)=> {
      console.log("item", value)
      Object.values(value).forEach(v => {
        const _ln = v.length;
        ln += (_ln ? _ln : 0);
      })
    })
    setItemLength(ln);
  },[cart]);

  return (
    <div className="cart">
      <div className="cart-container">
        <AiOutlineShoppingCart className="icon" />
        <span className="count-container">{itemLength}</span>
      </div>
    </div>
  );
};

export default Cart;