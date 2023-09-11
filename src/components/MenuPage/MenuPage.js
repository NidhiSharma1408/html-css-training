import MenuItem from "./MenuItem";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchMenu from "./SearchMenu";
import FilterMenu from "./FilterMenu";

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
                console.log(allItems);
                setDisplayItems(res.data);

            }))
            .catch((err) => console.log(err));
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
            console.log(newItems);
            return newItems;
        });
    }, [query, filter, vegOnly]);
    useEffect(() => {
        setDisplayItems(d => {
            let newItems = [];
            console.log(d);
            switch (sortBy) {
                case "name":
                    console.log("by name");
                    newItems = [...(d.sort((a, b) => {
                        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
                    }))];
                    break;
                case "price":
                    console.log("by price");
                    newItems = [...(d.sort((a, b) => {
                        return a.price - b.price;
                    }))]
                    break;
                default:
                    console.log("by none");
                    newItems = d;
                    break;
            };
            console.log(newItems);
            return newItems;
        })
    }, [sortBy]);

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <SearchMenu setQuery={setQuery} setVegOnly={setVegOnly} vegOnly={vegOnly} sortBy={sortBy} setSortBy={setSortBy} />

                <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">

                    <FilterMenu filter={filter} setFilter={setFilter} />

                    <div className="content">
                        <div className="row g-4">
                            {
                                displayItems.map((val, id) => {
                                    return <MenuItem item={val} key={val._id} />
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