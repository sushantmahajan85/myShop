import "./index.css";
import img from "./img/carouselImages/carouselImg.jpg";

const About = () => {
    return (
        <div className="About">
            <div className="about-image">
                <img src={img} alt="" />
            </div>
            <div className="about-content">
                <p>
                    <strong>Mahajan Cyber World</strong> was started in 2008
                    with only four computer systems. Within a year, the number
                    of systems increased to ten and the cyber cafe had grown to
                    such an extent that we had full house at all times. At
                    Mahajan Cyber World, we deal in all kinds of computer
                    software/hardware solutions.
                </p>
                <p>
                    With the grace of God, Mahajan Cyber World is renowned in
                    the town of Dinanagar and the nearby villages.
                </p>
            </div>
        </div>
    );
};

export default About;
