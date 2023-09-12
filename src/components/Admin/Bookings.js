import axios from "../../http";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
const Bookings = () => {
    let [bookings, setBookings] = useState([]);
    let [isloading, setisLoading] = useState("false");
    useEffect(() => {
        setisLoading(true);
        axios.get("/booking")
            .then((res) => {
                setBookings(res.data);
                setisLoading(false);
            })
            .catch(err => console.log("ERROR: ", err));
    }, [])
    return (
        (isloading) ? <Spinner /> : (<table className="table">
            <thead>
                <tr><th>S.No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date&Time</th>
                    <th>No. of People</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {
                    bookings.map((val, i) => {
                        return <tr key={val._id}>
                            <th>{i + 1}</th>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{Date(val.datetime)}</td>
                            <td>{val.people}</td>
                            <td> {val.message}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>)
    )
}
export default Bookings; 