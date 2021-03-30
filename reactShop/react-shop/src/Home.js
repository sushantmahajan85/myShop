import "./index.css";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Services from "./Services";
import Pricing from "./Pricing";
import Applications from "./Applications";

const Home = () => {
    return (
        <div className="Home">
            <Carousel />
            <Applications />
            <Services />
            <Pricing />
            <Contact />
        </div>
    );
};

export default Home;
