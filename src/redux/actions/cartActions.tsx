import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants';

export const addToCart = (product: any) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (productName: string) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productName,
  };
};
