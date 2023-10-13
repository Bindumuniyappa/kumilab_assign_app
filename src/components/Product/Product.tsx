// src/components/Product.tsx
import React, { useState } from 'react';
import './Product.css';

interface ProductProps {
  name: string;
  price: string;
  subtitle: string;
  Image:string;
  // onAddToCart:()=>void;
}

const Product: React.FC<ProductProps> = ({ name, price, subtitle,Image }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
    // onAddToCart();
  };

  return (
    <div className='product-container'>
    <div className="product">
      <h3>{name}</h3>
      <p className="product-price">{price}</p>
      <p className="product-subtitle">{subtitle}</p>
      {/* <button onClick={addToCart}>+</button> */}
      {/* <span className="cart-count">{cartCount}</span> */}
    </div>
    </div>
  );
};

export default Product;
