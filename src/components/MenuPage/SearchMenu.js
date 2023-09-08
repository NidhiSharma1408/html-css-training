import { useState } from "react";
const SearchMenu = ({ setQuery, setVegOnly, vegOnly, sortBy, setSortBy }) => {
    let [q, setQ] = useState("");
    const handleSearch = (event) => {
        event.preventDefault();
        setQuery(q);
    }
    const handleSortBy = (event) => {
        setSortBy(event.target.value);
    }
    return (
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">

            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>

            <form className="input-group rounded">
                <input type="search" value={q} onChange={(e) => setQ(e.target.value)} className="form-control rounded" placeholder="Search" name="query" />
                <button onClick={handleSearch} className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search" ></i>
                </button>
                <div className="rounded">
                    <input onChange={() => setVegOnly(!vegOnly)} name="veg-only" type="checkbox" className="form-check-input btn-check" id="veg-only" />
                    <label htmlFor="veg-only" className={"form-check-label btn " + ((vegOnly) ? "btn-success" : "btn-outline-success")} >
                        Only Veg
                        {(vegOnly) ? <i class=" fa-lg bi bi-x"></i> : ""}
                    </label>
                </div>
                <div className="form-check d-inline-flex" >
                    <select id="sort" className="form-select" onChange={handleSortBy} value={sortBy}>
                        <option value="none">Sort:None</option>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                    </select>

                </div>
            </form >
            <div className="mb-3"></div>
            <div className="justify-content-center">
                {/* <div className="btn btn-primary">
                    <input onChange={toggleVeg} name="veg-only" type="checkbox" className="form-check-input" id="veg-only" />
                    <label className="form-check-label" htmlFor="veg-only">
                        Only Veg
                    </label>
                </div>
                <label >
                    Sort By:
                    <select class="form-select">
                        <option>Name</option>
                        <option>Price</option>
                    </select>
                </label> */}
            </div>
            <div className="mb-3"></div>
        </div >

    )
}
export default SearchMenu;