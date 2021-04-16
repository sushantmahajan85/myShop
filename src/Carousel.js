import "./index.css";
import img from "./img/carouselImages/carouselImg.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Carousel = () => {
    return (
        <div className="Carousel">
            <div className="hero-area">
                <div className="hero-slideshow owl-carousel">
                    <div className="single-slide bg-img">
                        <div
                            className="slide-bg-img bg-img bg-overlay"
                            style={{
                                backgroundImage: `url(${img})`,
                            }}
                        ></div>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center justify-content-center">
                                <div className="col-12 col-lg-9">
                                    <div className="welcome-text text-center">
                                        {/* <h6
                                            data-animation="fadeInUp"
                                            data-delay="100ms"
                                        >
                                            2 years interest
                                        </h6> */}
                                        <h2
                                            data-animation="fadeInUp"
                                            data-delay="300ms"
                                        >
                                            get latest{" "}
                                            
                                            <span>applications</span>
                                        </h2>
                                        <p
                                            data-animation="fadeInUp"
                                            data-delay="500ms"
                                        >
                                            At Mahajan Cyber World, we
                                            deal in all kinds of computer
                                            software/hardware solutions. For
                                            collaboration, make a call at
                                            9815144901.
                                        </p>
                                        <Link
                                            to="/applications"
                                            className="btn credit-btn mt-50"
                                            data-animation="fadeInUp"
                                            data-delay="700ms"
                                        >
                                            Discover
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Helmet>
                <script src="js/jquery/jquery-2.2.4.min.js"></script>
                <script src="js/bootstrap/popper.min.js"></script>
                <script src="js/bootstrap/bootstrap.min.js"></script>
                <script src="js/plugins/plugins.js"></script>
                <script src="js/active.js"></script>
            </Helmet>
        </div>
    );
};

export default Carousel;
