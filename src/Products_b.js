import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import axios from "axios";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Products = () => {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        console.log("Working");
        getData();
    },
        []);

    const getData = () => {
        axios.get("data.json")
            .then((response) => {
                setProducts(response.data);
            })
    }
    const saveData = (event) => {
        event.preventDefault();
        const new_product = {
            name: event.target.name.value,
            price: event.target.price.value,
            in_stock: event.target.in_stock.checked
        };
        setProducts((oldProducts) => { return [...oldProducts, new_product] }); //updater
    }
    let deleteProduct = (indexToDelete) => {
        const updatedProducts = products.filter((val, index) => { return (index === indexToDelete) ? false : true });
        setProducts(updatedProducts);
    }
    const reset = () => {
        setProducts([]);
    }
    return (
        <div>
            <h1>Products</h1>
            <form onSubmit={saveData}>
                <TextField variant="filled" label="Product Name" type="text" name="name" placeholder="Enter product name" />
                <br />
                <TextField variant="filled" label="Price" type="number" name="price" placeholder="Enter product price" />
                <br />
                Available: <Checkbox {...label} defaultChecked name="in_stock" />
                <br />
                <Button variant="contained" type="submit">Save</Button>
            </form>
            <Button variant="contained" color="error" onClick={reset}>Delete All</Button>
            <table>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>In-stock</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((val, index) => {
                            return (
                                <tr className={(val.in_stock) ? "in_stock" : ""}>
                                    <td>{index + 1}</td>
                                    <td>{val.name}</td>
                                    <td>{val.price}</td>
                                    <td>{(val.in_stock) ? "Yes" : "No"}</td>
                                    <td><Button variant="text" color="error" onClick={() => { deleteProduct(index) }}>Delete</Button></td>
                                </tr>);
                        })
                    }
                </tbody>
            </table>

        </div >

    )
}
export default Products;