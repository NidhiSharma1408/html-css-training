import { NavLink, Outlet } from "react-router-dom"
import { useState } from "react";
const Admin = () => {
    let [admin, setAdmin] = useState(false);
    let [err, setErr] = useState("");
    let renderedElement;
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (email === "admin@gmail.com" && password === "admin") {
            setAdmin(true);
            setErr("Login Successful.");
            setTimeout(() => setErr(""), 3000);
        }
        else {
            setAdmin(false);
            setErr("Login Failed!");
            setTimeout(() => setErr(""), 3000);
        }
    }
    const handleLogout = () => {
        setAdmin(false);
    }

    if (admin) {
        renderedElement = (<>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="bookings">Bookings</NavLink>
                    <NavLink className="nav-item nav-link" to="contacts">Contacts</NavLink>
                </div>
            </div>
            <Outlet />
            <button className="btn btn-primary w-100 py-3" onClick={handleLogout}>Logout!</button>
        </>)
    } else {
        renderedElement = (<div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input id="email" className="form-control" type="email" name="email" placeholder="Email" required />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-floating">
                            <input id="password" className="form-control" type="password" name="password" placeholder="Password" required />
                            <label htmlFor="password"> Password </label>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <button className="btn btn-primary w-100 py-3">Login!</button>

                    </div>
                    {(setErr === "") ? "" : <div className="col-md-8 text-center"><h1>{err} </h1></div>}

                </div>
            </form >
        </div >)
    }
    return (
        <div className="container-xxl py-5">
            {renderedElement}
        </div>
    );
}
export default Admin;