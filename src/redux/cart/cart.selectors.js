import { createSelector } from 'reselect';

//input selector for cart state
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([ selectCart ], (cart) => cart.cartItems);

export const selectCartHidden = createSelector([ selectCart ], (cart) => cart.hidden);

export const selectCartItemsCount = createSelector([ selectCartItems ], (cartItems) =>
	cartItems.reduce((accum, cartItem) => accum + cartItem.quantity, 0),
);

export const selectCartTotal = createSelector([ selectCartItems ], (cartItems) =>
	cartItems.reduce((accum, cartItem) => accum + cartItem.quantity * cartItem.price, 0),
);
