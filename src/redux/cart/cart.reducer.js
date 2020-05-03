import CartActionTypes from './cart.types'

const INITIAL_STATE = {
  cartItems: [],
  hidden: true,
};

const cartReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state;
  }
};

export default cartReducer;