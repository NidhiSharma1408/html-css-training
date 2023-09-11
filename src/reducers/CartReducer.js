import { createSelector } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}


export const selectCart = state => state.cart;
export const selectItemId = (state, itemId) => itemId;
export const selectTotal = createSelector([selectCart], (cart) => cart.reduce((sum, val) => sum + val.quantity * val.price, 0).toFixed(2))
export const selectCartWithId = createSelector([selectCart, selectItemId], (cart, itemId) => {
    const cartItem = cart.filter((val) => (val.itemId === itemId));
    return cartItem;
})

const CartReducer = (state = initialState, action) => {
    if (action.type === "FETCH") {
        let newCart = action.payload;
        let newState = { ...state, cart: [...newCart] };
        return newState;
    }
    return state;
}

export default CartReducer;