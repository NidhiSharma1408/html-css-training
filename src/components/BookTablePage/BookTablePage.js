// TODO: remove video error
import axios from "axios";
import { useState } from "react";
const BookTablePage = () => {
    let [success, setSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = {
            name: form.name.value,
            email: form.email.value,
            datetime: new Date(form.datetime.value),
            people: form.people.value,
            message: form.message.value
        }
        console.log("sending data to backend...", data);
        axios.post("/booking", data)
            .then((res) => {
                console.log(res);
                event.target.reset();
                setSuccess(true);
                setTimeout(() => setSuccess(false), 3000);
            })
            .catch((err) => console.log(err));
    }
    return (
        <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-0">
                <div className="col-md-6">
                    <div className="video">
                        <button type="button" className="btn-play">
                            <span></span>
                        </button>
                    </div>
                </div>
                <div className="col-md-6 bg-dark d-flex align-items-center">
                    <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                        <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                        <h1 className="text-white mb-4">Book A Table Online</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input required={true} type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input required={true} type="email" name="email" className="form-control" id="email" placeholder="Your Email" />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-md-6">

                                    <div className="form-floating date" id="date3" >
                                        <input required={true} name="datetime" type="datetime-local" className="form-control datetimepicker-input" id="datetime" placeholder="Date & Time" />
                                        <label htmlFor="date3">Date & Time</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input required={true} type="number" name="people" className="form-control" id="select1" placeholder="No. of People" />
                                        <label htmlFor="select1">No. Of People</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea name="message" className="form-control" placeholder="Special Request" id="message" style={{ height: 100 + 'px' }}></textarea>
                                        <label htmlFor="message">Special Request</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                {(success) ? <div className="row g-0 bg-dark "><div className="col-md-6"></div><div className="col-md-6"><h1 className="text-center" style={{ color: "white" }}>Booking Done!</h1></div></div> : ""}
            </div>
        </div>
    );
}
export default BookTablePage;