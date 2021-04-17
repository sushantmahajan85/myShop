import "./index.css";
import img from "./img/carouselImages/carouselImg.jpg";

const About = () => {
    return (
        <div className="About">
            <div className="about-image">
                <img src={img} alt="" />
            </div>
            <div className="about-content">
                <div style={{ width: "100%", textAlign: "center" }}>
                    <p style={{ width: "70%", margin: "0 auto" }}>
                        <strong>Mahajan Cyber World</strong> was started in 2008
                        with only four computer systems. Within a year, the
                        number of systems increased to ten and the cyber cafe
                        has grown to such an extent that we have mostly full
                        house at all times. At Mahajan Cyber World, we deal in
                        all kinds of computer software/hardware solutions.
                        <br />
                        With the grace of God and the best wishes of our
                        customers, Mahajan Cyber World is renowned in the town
                        of Dinanagar and all nearby towns too.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
