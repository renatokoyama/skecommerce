import CartActionTypes from './cart.types';

export const addToCart = (item) => ({
  payload: item,
  type: CartActionTypes.ADD_TO_CART,
});

export const toogleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
