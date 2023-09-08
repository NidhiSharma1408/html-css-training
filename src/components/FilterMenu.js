const FilterMenu = ({ filter, onFilter }) => {

    const handleClick = (filter) => {
        console.log("clicking");
        onFilter(filter);
    }
    return (
        <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">

            <li className="nav-item">
                <button className={"btn d-flex align-items-center text-start mx-3 ms-0 pb-3" + ((filter === 'b') ? " active" : "")} onClick={() => handleClick("b")}>
                    <i className="fa fa-coffee fa-2x text-primary"></i>
                    <div className="ps-3">
                        <small className="text-body">Popular</small>
                        <h6 className="mt-n1 mb-0">Breakfast</h6>
                    </div>
                </button>
            </li>
            <li className="nav-item">
                <button className={"btn d-flex align-items-center text-start mx-3 pb-3" + ((filter === 'l') ? " active" : "")} onClick={() => handleClick("l")}>
                    <i className="fa fa-hamburger fa-2x text-primary"></i>
                    <div className="ps-3">
                        <small className="text-body">Special</small>
                        <h6 className="mt-n1 mb-0">Lunch</h6>
                    </div>
                </button>
            </li>
            <li className="nav-item">
                <button className={"btn d-flex align-items-center text-start mx-3 me-0 pb-3" + ((filter === 'd') ? " active" : "")} onClick={() => handleClick("d")}>
                    <i className="fa fa-utensils fa-2x text-primary"></i>
                    <div className="ps-3">
                        <small className="text-body">Lovely</small>
                        <h6 className="mt-n1 mb-0">Dinner</h6>
                    </div>
                </button>
            </li>
        </ul>
    )
}
export default FilterMenu;