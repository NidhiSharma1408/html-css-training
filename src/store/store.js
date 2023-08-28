import { createStore, applyMiddleware } from "redux";
import EmployeeReducer from "../reducers/EmployeeReducer";
import thunk from "redux-thunk";

let Store = createStore(EmployeeReducer, applyMiddleware(thunk));
export default Store;