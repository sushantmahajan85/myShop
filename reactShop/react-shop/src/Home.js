import "./index.css";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Services from "./Services";
import Pricing from "./Pricing";

const Home = () => {
    return (
        <div className="Home">
            <Carousel />
            <Services />
            <Pricing />
            <Contact />
        </div>
    );
};

export default Home;
