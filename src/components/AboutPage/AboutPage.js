import RestaurantGallery from "./RestaurantGallery";
import About from "./About";
const AboutPage = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <RestaurantGallery />
                    <About />
                </div>
            </div>
        </div>
    );
}
export default AboutPage;