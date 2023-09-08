import MenuItem from "../components/MenuItem";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import SearchMenu from "../components/SearchMenu";
import FilterMenu from "../components/FilterMenu";

let allItems = [];
const MenuPage = () => {
    let [displayItems, setDisplayItems] = useState([]);
    let [filter, setFilter] = useState("");
    let [search, setSearch] = useState("");
    let [vegOnly, setVegOnly] = useState(false);
    useEffect(() => {
        axios.get("db/menu.json")
            .then((res => {
                allItems = res.data;
                setDisplayItems(res.data);
            }))
            .catch((err) => console.log(err));
    }, []);
    useEffect(() => {
        setDisplayItems(() => {
            let newItems = [];
            newItems = allItems.filter(val => {
                const f = (filter === "" || val.type === filter);
                const s = (val.name.toLowerCase().includes(search.toLowerCase()));
                const v = (!vegOnly || val.veg);
                return f && s && v;
            });
            console.log(newItems);
            return newItems;
        });
    }, [search, filter, vegOnly])
    const onSearch = (query) => {
        console.log("seaching...", query);
        setSearch(query);
    }
    const onFilter = (filter) => {
        console.log("filtering...", filter);
        setFilter(filter);
    }
    const toggleVeg = () => {
        setVegOnly(!vegOnly);
    }
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <SearchMenu onSearch={onSearch} />
                <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">

                    <FilterMenu filter={filter} onFilter={onFilter} />
                    <span className="btn btn-primary">
                        <input onChange={toggleVeg} name="veg-only" type="checkbox" className="form-check-input" id="veg-only" />
                        <label className="form-check-label" for="veg-only">
                            Only Veg
                        </label>
                    </span>
                    <div className="content">
                        <div className="row g-4">
                            {
                                displayItems.map((val, id) => {
                                    return <MenuItem item={val} key={id} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >


    );
}
export default MenuPage;