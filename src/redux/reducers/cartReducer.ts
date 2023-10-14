import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { name, category } = action.payload;
      const updatedCart = { ...state.cart };
      if (!updatedCart[category]) {
        updatedCart[category] = [];
      }
      updatedCart[category].push(action.payload);

      return {
        ...state,
        cart: updatedCart,
      };

    case REMOVE_FROM_CART:
      const { name: removeName, category: removeCategory } = action.payload;
      const cartToRemove = state.cart[removeCategory] || [];
      const filteredCart = cartToRemove.filter((item) => item.name !== removeName);
      const updatedCartAfterRemove = { ...state.cart, [removeCategory]: filteredCart };

      return {
        ...state,
        cart: updatedCartAfterRemove,
      };

    default:
      return state;
  }
};

export default cartReducer;
