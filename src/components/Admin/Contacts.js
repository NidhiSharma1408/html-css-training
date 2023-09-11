import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
const Contacts = () => {
    let [contacts, setContacts] = useState([]);
    let [isloading, setisLoading] = useState("false");
    useEffect(() => {
        setisLoading(true);
        axios.get("/api/contact")
            .then((res) => {
                setContacts(res.data);
                setisLoading(false);
            })
            .catch(err => console.log("ERROR: ", err));
    }, [])
    return (
        (isloading) ? <Spinner /> : (<table className="table">
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {
                    contacts.map((val, i) => {
                        return <tr key={val._id}>
                            <th>{i + 1}</th>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.subject}</td>
                            <td> {val.message}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>)
    )
}
export default Contacts; 