// import React, { useState } from 'react';
// import './Product.css';
// import {BsPlusCircleFill,BsDashCircleFill} from 'react-icons/bs';
// import {connect} from 'react-redux';
// import {addToCart,removeFromCart} from '../../redux/actions/cartActions';

// interface ProductProps {
//   name: string;
//   price: string;
//   subtitle: string;
//   Image:string;
//   cart:any;
//   category:string;
//   addToCart:(product:any)=>void;
//   removeFromCart:(productName:string)=>void;
// }

// const Product: React.FC<ProductProps> = ({ name, price, subtitle,Image,cart,addToCart,removeFromCart,category}) => {
//    const productInCart = cart.find((item: any) => item.name === name);

//   const addProductToCart = () => {
//     addToCart({ name, price, subtitle, Image,category });
//   };

//   const removeProductFromCart = () => {
//     removeFromCart(name);
//   };

//   return (
//     <div className='product-container'>
//     <div className="product">
//       <img src={Image} className="product-image" alt={name} />
//       {productInCart ? (
//           <BsDashCircleFill className='icons' onClick={removeProductFromCart} />
//         ) : (
//           <BsPlusCircleFill className='icons' onClick={addProductToCart} />
//         )}
//       <p className="product-price">{price}</p>
//       <h3>{name}</h3>
//       <p className="product-subtitle">{subtitle}</p>
//     </div>
//     </div>
//   );
// };

// const mapStateToProps=(state:any)=>({
//   cart:state.cart,
// });

// export default connect(mapStateToProps,{addToCart,removeFromCart})(Product);
import React from 'react';
import './Product.css';
import { BsPlusCircleFill, BsDashCircleFill } from 'react-icons/bs';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

interface ProductProps {
  name: string;
  price: string;
  subtitle: string;
  Image: string;
  cart: any;
  category: string;
  addToCart: (product: any) => void;
  removeFromCart: (product: any) => void;
}

const Product: React.FC<ProductProps> = ({
  name,
  price,
  subtitle,
  Image,
  cart,
  addToCart,
  removeFromCart,
  category,
}) => {
  const categoryCart = cart[category] || [];
  const productInCart = categoryCart.find((item: any) => item.name === name);

  const addProductToCart = () => {
    addToCart({ name, price, subtitle, Image, category });
  };

  const removeProductFromCart = () => {
    removeFromCart({ name, category });
  };

  return (
    <div className='product-container'>
      <div className='product'>
        <img src={Image} className='product-image' alt={name} />
        {productInCart ? (
          <BsDashCircleFill className='icons' onClick={removeProductFromCart} />
        ) : (
          <BsPlusCircleFill className='icons' onClick={addProductToCart} />
        )}
        <p className='product-price'>{price}</p>
        <h3>{name}</h3>
        <p className='product-subtitle'>{subtitle}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { addToCart, removeFromCart })(Product);
