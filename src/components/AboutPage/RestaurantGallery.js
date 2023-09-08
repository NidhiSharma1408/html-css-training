import about1 from "../../img/about-1.jpg";
import about2 from "../../img/about-2.jpg";
import about3 from "../../img/about-3.jpg";
import about4 from "../../img/about-4.jpg";
const RestaurantGallery = () => {
    return (
        <div className="col-lg-6">
            <div className="row g-3">
                <div className="col-6 text-start">
                    <img alt="about" className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={about1} />
                </div>
                <div className="col-6 text-start">
                    <img alt="about" className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={about2} style={{ marginTop: 25 + '%' }} />
                </div>
                <div className="col-6 text-end">
                    <img alt="about" className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={about3} />
                </div>
                <div className="col-6 text-end">
                    <img alt="about" className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={about4} />
                </div>
            </div>
        </div>
    );
}
export default RestaurantGallery;