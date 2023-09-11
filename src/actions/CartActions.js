import axios from "axios";
export const fetchAction = () => {
    const fetchFunc = (dispatch) => {
        axios.get("/cart")
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
        axios.delete("/cart/" + id)
            .then((res) => {
                dispatch(fetchAction());
            })
            .catch((err) => {
                console.log("ERROR:", err);
            })
    }
    return del;
}
export const updateAction = (id, qty) => {
    const update = (dispatch) => {
        axios.put("/cart/" + id, { quantity: qty })
            .then((res) => {
                dispatch(fetchAction());
            })
            .catch((err) => {
                console.log("ERROR:", err);
            })
    }
    return update;
}
export const addAction = (item) => {
    const add = (dispatch) => {
        axios.post("/cart", item)
            .then((res) => {
                console.log(res);
                dispatch(fetchAction());
            })
            .catch((err) => {
                console.log("ERROR:", err);
            })
    }
    return add;
}
