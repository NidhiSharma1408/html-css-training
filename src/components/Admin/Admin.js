import { NavLink, Outlet } from "react-router-dom"

const Admin = () => {
    return (<>
        <div className="navbar navbar-expand-lg navbar-dark px-4 px-lg-5 py-3 py-lg-0">
            <div className="navbar-nav">
                <NavLink className="nav-item nav-link" to="bookings">Bookings</NavLink>
                <NavLink className="nav-item nav-link" to="contacts">Contacts</NavLink>
            </div>
        </div>
        <Outlet />
    </>
    )
}
export default Admin;