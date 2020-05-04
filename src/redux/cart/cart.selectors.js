import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartHidden = createSelector (
  [selectCart],
  cart => cart.hidden
)

export const selectCartITemsCount = createSelector (
[selectCartItems],
  cartItems =>  cartItems.reduce(
    (accumulatedValue, item) => accumulatedValue + item.quantity,
    0
  )
)