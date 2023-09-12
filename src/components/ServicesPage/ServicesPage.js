import Service from "./Service";
import Spinner from "../Spinner";
import { useState, useEffect } from "react";
import axios from "../../http";
const ServicesPage = () => {
    let [services, setServices] = useState([]);
    useEffect(() => {
        axios.get("/services")
            .then((res) => { setServices(res.data) })
            .catch((err) => { throw err });
    }, []);

    return (

        <div className="container-xxl py-5">

            <div className="container">
                {
                    (services.length === 0) ? <Spinner /> : (<><div className="text-center wow fadeInUp">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Our Services</h5>
                        <h1 className="mb-5">Explore Our Services</h1>
                    </div>

                        <div className="row g-4">
                            {
                                services.map((val, id) => {
                                    return <Service data={val} key={id} />
                                })
                            }

                        </div>
                    </>
                    )
                }

            </div>
        </div>
    );
}
export default ServicesPage;