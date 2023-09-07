import CartItem from "../components/CartItem";
import { useState, useEffect } from "react";
import axios from "axios";
const CartPage = () => {
    let [items, setItems] = useState([]);
    useEffect(() => {
        axios.get("db/cart.json")
            .then(res => {
                console.log(res);
                setItems(res.data);
            })
            .catch(err => { console.log(err) });
    }, []);
    const onDelete = (id) => {
        const newItems = items.filter((val) => val.id !== id);
        setItems(newItems);
        console.log("send request to backend");
    }
    const onQuantityChange = (id, qty) => {
        const newItems = items.map((val) => (id === val.id) ? { ...val, quantity: qty } : val);
        setItems(newItems);
        console.log("send request to backend");
    }

    return (
        <div className="container-xxl py-5">
            <div className="container h-100 py-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Dishes you love!</h5>
                    <h1 className="mb-5">Cart</h1>
                </div>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-10">


                        {
                            items.map((val, id) => {
                                return <CartItem item={val} key={val.id} onDelete={onDelete} onQuantityChange={onQuantityChange} />
                            })
                        }

                        <div className="card-body" style={{ textAlign: "center" }}>
                            <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartPage;