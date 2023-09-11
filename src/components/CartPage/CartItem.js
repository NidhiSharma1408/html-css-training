import { useEffect, useState } from "react";
const CartItem = ({ item, onDelete, onQuantityChange }) => {
    let [quantity, setQuantity] = useState(item.quantity);
    useEffect(() => {
        onQuantityChange(item.itemId, quantity);
    }, [quantity]);
    const handleDeleteClick = (id) => {
        onDelete(id);
    }

    return (
        <div className="card rounded-3 mb-4">
            <div className="card-body p-4">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                            src={item.image}
                            className="img-fluid rounded-3" alt={item.name} />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{item.name}</p>

                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button className="btn btn-link px-2"
                            onClick={() => (quantity <= 0) ? setQuantity(0) : setQuantity(parseInt(quantity - 1))}>
                            <i className="fas fa-minus"></i>
                        </button>

                        <input id="form1" min="0" name="quantity" value={quantity} onChange={(e) => (e.target.value <= 0) ? setQuantity(0) : setQuantity(parseInt(e.target.value))} type="number"
                            className="form-control form-control-sm" />

                        <button className="btn btn-link px-2"
                            onClick={() => setQuantity(parseInt(quantity + 1))}>
                            <i className="fas fa-plus"></i>
                        </button>

                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">${(item.price * quantity).toFixed(2)}</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <button onClick={() => handleDeleteClick(item.itemId)} className="btn text-danger"><i className="fas fa-trash fa-lg"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartItem;