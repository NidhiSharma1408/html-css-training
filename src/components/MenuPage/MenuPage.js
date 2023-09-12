import MenuItem from "./MenuItem";
import { useState, useEffect } from "react";
import axios from "../../http";
import SearchMenu from "./SearchMenu";
import FilterMenu from "./FilterMenu";
import Spinner from "../Spinner";

let allItems = [];
const MenuPage = () => {
    let [displayItems, setDisplayItems] = useState([]);
    let [filter, setFilter] = useState("");
    let [query, setQuery] = useState("");
    let [vegOnly, setVegOnly] = useState(false);
    let [sortBy, setSortBy] = useState("none");
    useEffect(() => {
        axios.get("/menu")
            .then((res => {
                allItems = res.data;
                setDisplayItems(res.data);
            }))
            .catch((err) => console.log("ERROR: ", err));
    }, []);
    useEffect(() => {
        setDisplayItems(() => {
            let newItems = [];
            newItems = allItems.filter(val => {
                const f = (filter === "" || val.type === filter);
                const s = (val.name.toLowerCase().includes(query.toLowerCase()));
                const v = (!vegOnly || val.veg);
                return f && s && v;
            });
            return newItems;
        });
    }, [query, filter, vegOnly]);
    useEffect(() => {
        setDisplayItems(d => {
            let newItems = [];
            switch (sortBy) {
                case "name":
                    newItems = [...(d.sort((a, b) => {
                        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
                    }))];
                    break;
                case "price":
                    newItems = [...(d.sort((a, b) => {
                        return a.price - b.price;
                    }))]
                    break;
                default:
                    newItems = d;
                    break;
            };
            return newItems;
        })
    }, [sortBy]);

    return (
        <div className="container-xxl py-5">
            <div className="container">
                {
                    (allItems.length === 0) ? <Spinner /> : (<>
                        <SearchMenu setQuery={setQuery} setVegOnly={setVegOnly} vegOnly={vegOnly} sortBy={sortBy} setSortBy={setSortBy} />

                        <div className="tab-class text-center wow fadeInUp">

                            <FilterMenu filter={filter} setFilter={setFilter} />

                            <div className="content">
                                <div className="fade show row g-4">
                                    {
                                        displayItems.map((val, id) => {
                                            return <MenuItem item={val} key={val._id} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </>)}
            </div>
        </div >


    );
}
export default MenuPage;