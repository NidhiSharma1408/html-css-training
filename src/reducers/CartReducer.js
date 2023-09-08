const initialState = {
    cart: []
}
const CartReducer = (state = initialState, action) => {
    console.log("cart: ", state, action);
    if (action.type === "DELETE") {
        console.log("delete");
        const id = action.payload;
        let cart = [...state.cart];
        cart = cart.filter((val) => val.id !== id);
        console.log(cart);
        return { ...state, cart };
    }
    if (action.type === "UPDATE") {
        console.log("update");
        let cart = [...state.cart];
        const id = action.payload.id;
        const qty = action.payload.qty;
        cart = cart.map((val) => (id === val.id) ? { ...val, quantity: qty } : val);
        return { ...state, cart };
    }
    if (action.type === "FETCH") {
        console.log("fetch");
        let newCart = action.payload;
        console.log("Inside fetch Cart", state, newCart);
        let newState = { ...state, cart: [...newCart] };
        return newState;
    }
    return state;
}

export default CartReducer;