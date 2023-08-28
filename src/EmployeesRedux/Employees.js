import { useState, useEffect } from "react";
import { addEmp, deleteEmp as removeEmp, deleteAll as clear, fetchData } from "../actions/employeeactions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import EmployeeList from "./EmployeeList";
import EmployeeForm from "./EmployeeForm";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
const Employees = () => {
    let [employees] = useSelector((state) => {
        console.log(state);
        return [state];
    });
    const dispatcher = useDispatch();
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        console.log("Getting data");
        dispatcher(fetchData());
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

        dispatcher(addEmp(empObj));
        newEmp.reset();
    }

    const deleteEmp = (indexToDelete) => {
        dispatcher(removeEmp(indexToDelete));
    }

    const deleteAll = () => {
        dispatcher(clear());
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