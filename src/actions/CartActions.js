import axios from "axios";
export const fetchAction = () => {
    const fetchFunc = (dispatch) => {
        axios.get("/db/cart.json")
            .then((res) => {
                dispatch({ type: "FETCH", payload: res.data });
            })
            .catch((err) => {
                console.log("ERROR:", err);
            })
    }
    return fetchFunc;
}
export const deleteAction = (id) => {
    const del = (dispatch) => {
        dispatch({ type: "DELETE", payload: id })
        console.log("send request to backend");
    }
    return del;
}
export const updateAction = (id, qty) => {
    const update = (dispatch) => {
        dispatch({ type: "UPDATE", payload: { id, qty } })
        console.log("send request to backend");
    }
    return update;
}
