import { Link } from "react-router-dom";

//Todo: add active class to link
const NavBar = ({ cart }) => {
    return (
        <div className="container-xxl position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <Link to="/" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Restoran</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/service" className="nav-item nav-link">Service</Link>
                        <Link to="/menu" className="nav-item nav-link">Menu</Link>
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        <Link to="/cart" className="nav-item nav-link">
                            <div className="wrapper">
                                <i className="fa fa-2x text-primary">&#xf07a;</i>
                                <span class="badge"> {cart} </span>
                            </div>
                        </Link>
                    </div>
                    <Link to="/book" className="btn btn-primary py-2 px-4">Book A Table</Link>
                </div >
            </nav >
        </div >
    );
}
export default NavBar;