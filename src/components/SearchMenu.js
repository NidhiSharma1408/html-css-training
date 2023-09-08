import { useState } from "react";
const SearchMenu = ({ onSearch }) => {
    let [query, setQuery] = useState("");
    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(query);
    }
    return (
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">

            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>

            <form className="input-group rounded">
                <input value={query} onChange={(e) => { setQuery(e.target.value); }} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button onClick={handleSearch} className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search" ></i>
                </button>
            </form>
            <div className="mb-5"></div>
        </div>

    )
}
export default SearchMenu;