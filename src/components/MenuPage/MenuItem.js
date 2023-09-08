import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAction, deleteAction, updateAction } from "../../actions/CartActions";

const MenuItem = ({ item }) => {

    const dispatcher = useDispatch();
    let [cartItem] = useSelector((state) => {
        return state.cart.filter((val) => (val.id === item.id));
    })
    let [quantity, setQuantity] = useState((cartItem) ? cartItem.quantity : 0);
    useEffect(() => {
        if (!cartItem) {
            if (quantity !== 0)
                dispatcher(addAction({ ...item, quantity }));
            else return;
        }
        else {
            if (cartItem.quantity === quantity) { return; }
            else {
                if (quantity === 0)
                    dispatcher(deleteAction(item.id));
                else
                    dispatcher(updateAction(item.id, quantity));
            }
        }
        console.log("quantity changed");
    }, [quantity]);
    let addToCart;
    if (quantity === 0) {
        addToCart = (<button className="btn btn-link" onClick={() => setQuantity(1)}><i class="bi bi-cart-plus fa-lg"></i></button>)
    } else {
        addToCart = (
            <div className="d-flex align-items-center">
                <button className="btn btn-link px-2"
                    onClick={() => (quantity <= 0) ? setQuantity(0) : setQuantity(parseInt(quantity - 1))}
                >
                    <i className="fas fa-minus"></i>
                </button>

                <input id="form1" min="0" name="quantity"
                    value={quantity}
                    onChange={(e) => (e.target.value <= 0) ? setQuantity(0) : setQuantity(parseInt(e.target.value))}
                    type="number"
                    className="form-control form-control-sm"
                    style={{ width: "50px" }}
                />

                <button className="btn btn-link px-2"
                    onClick={() => setQuantity(parseInt(quantity + 1))}
                >
                    <i className="fas fa-plus"></i>
                </button>
            </div>

        )
    }
    return (
        <div className="col-lg-6">
            <div className="d-flex align-items-center">
                <img className="flex-shrink-0 img-fluid rounded" src={item.image} alt="" style={{ width: 80 + 'px' }} />
                <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>{item.name}</span>

                        <span className="text-primary">${item.price}</span>
                    </h5>
                    <small className={((item.veg) ? "text-success" : "text-danger") + " fst-italic"}>{item.description}  {(item.veg) ? (<i className="fas fa-leaf"></i>) : (<i className="fas fa-drumstick-bite"></i>)}</small>
                </div>
                <div style={{ margin: "30px", padding: "15px", border: "1px solid #fea116", borderRadius: "10px", width: "250px" }}>

                    {
                        addToCart
                    }
                </div>
            </div>
        </div >

    )
}
export default MenuItem;