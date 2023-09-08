import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { deleteAction, updateAction } from "../../actions/CartActions";

const CartPage = ({ cart }) => {
    const dispatcher = useDispatch();
    const onDelete = (id) => {
        dispatcher(deleteAction(id));
    }
    const onQuantityChange = (id, qty) => {
        dispatcher(updateAction(id, qty));
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
                            cart.map((val) => {
                                return <CartItem item={val} key={val.id} onDelete={onDelete} onQuantityChange={onQuantityChange} />
                            })
                        }

                        <div className="card-body" style={{ textAlign: "center" }}>
                            <button type="button" className="btn btn-warning btn-block btn-lg">Pay $</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartPage;