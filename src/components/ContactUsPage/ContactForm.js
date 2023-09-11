import axios from "axios";
import { useState } from "react";
const ContactForm = () => {
    let [success, setSuccess] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        }
        console.log("data to sent to backend: ", data);
        axios.post("/contact", data)
            .then((res) => {
                console.log(res);
                event.target.reset();
                setSuccess(true);
                setTimeout(() => setSuccess(false), 3000);
            })
            .catch((err) => console.log(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="row g-3">
                <div className="col-md-6">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                        <label htmlFor="name">Your Name</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />
                        <label htmlFor="email">Your Email</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            required
                        />
                        <label htmlFor="subject">Subject</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            placeholder="Leave a message here"
                            id="message"
                            name="message"
                            style={{ height: 150 + 'px' }}
                            required
                        ></textarea>
                        <label htmlFor="message">Message</label>
                    </div>
                </div>
                <div className="col-12">
                    <button className={"btn btn-primary w-100 py-3" + ((success) ? "disabled" : "")} type="submit">{(success) ? "Enquiry Request Sent!" : "Send Message"}</button>
                </div>
            </div>
        </form>
    );
}
export default ContactForm;