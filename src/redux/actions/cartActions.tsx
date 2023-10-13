import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants';

export const addToCart = (item: string) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (item: string) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};
