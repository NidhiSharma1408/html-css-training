import axios from "axios";
const addEmp = (data) => {

    const add = (dispatcher) => {
        console.log("add emp", data);
        axios.post("/employee", data)
            .then((res) => {
                console.log(res);
                dispatcher(fetchData());
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    }
    return add;
}
const deleteEmp = (indexToDelete) => {

    const del = (dispatcher) => {
        console.log("delete emp", indexToDelete);
        axios.delete("/employee/" + indexToDelete)
            .then((res) => {
                console.log(res);
                dispatcher(fetchData());
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    }
    return del;
}
const deleteAll = () => {
    const del = (dispatcher) => {
        console.log("delete all")
        axios.delete("/deleteemployee")
            .then((res) => {
                console.log(res);
                dispatcher(fetchData());
            })
            .catch((err) => {
                console.log("err: ", err);
            });

    }
    return del;
}
const fetchData = () => {
    const fetch = (dispatcher) => {
        console.log("fetch all")
        axios.get("/employee")
            .then((response) => {
                dispatcher({ type: "FETCH_DATA", payload: response.data })
            })
            .catch((err) => {
                console.log("Error: ", err);
            })
    }
    return fetch;
}
export { addEmp, deleteEmp, deleteAll, fetchData };