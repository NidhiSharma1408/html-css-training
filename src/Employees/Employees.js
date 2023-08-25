import { useState, useEffect } from "react";
import axios from "axios";
import EmployeeList from "./EmployeeList";
import EmployeeForm from "./EmployeeForm";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
const Employees = () => {
    let [employees, setEmployees] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    const getData = () => {
        console.log("Getting data");
        axios.get("/employee")
            // axios.get("data.json")
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((err) => {
                console.log("Error: ", err);
            })
    }
    const saveData = (event) => {
        event.preventDefault();
        console.log("Data Saved");
        const newEmp = event.target;
        const empObj = {
            name: newEmp.name.value,
            age: newEmp.age.value,
            salary: newEmp.salary.value,
            city: newEmp.city.value
        };
        axios.post("/employee", empObj)
            .then((res) => {
                console.log(res);
                getData();
            })
            .catch((err) => {
                console.log("err: ", err);
            });
        newEmp.reset();
    }

    const deleteEmp = (indexToDelete) => {
        // const updatedEmps = employees.filter((val, idx) => {
        //     return (idx === indexToDelete) ? false : true;
        // })
        // setEmployees(updatedEmps);
        axios.delete("/employee/" + indexToDelete)
            .then((res) => {
                console.log(res);
                getData();
            })
            .catch((err) => {
                console.log("err: ", err);
            });

    }

    const deleteAll = () => {
        axios.delete("/deleteemployee")
            .then((res) => {
                console.log(res);
                getData();
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    }
    return (
        <div>
            <h1> Employees </h1>
            <EmployeeForm saveData={saveData} />
            <Button color="error" variant="outlined" startIcon={<DeleteIcon />} onClick={deleteAll}>Delete All</Button>
            <EmployeeList employees={employees} deleteEmp={deleteEmp} />
        </div>
    )
}
export default Employees;