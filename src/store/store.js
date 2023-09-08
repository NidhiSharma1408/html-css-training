import { createStore, applyMiddleware } from "redux";
import CartReducer from "../reducers/CartReducer";
import thunk from "redux-thunk";

let Store = createStore(CartReducer, applyMiddleware(thunk));
export default Store;