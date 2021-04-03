import "./index.css";
import img from "./img/carouselImages/one.jpg";
import { Helmet } from "react-helmet";

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
                                        <h6
                                            data-animation="fadeInUp"
                                            data-delay="100ms"
                                        >
                                            2 years interest
                                        </h6>
                                        <h2
                                            data-animation="fadeInUp"
                                            data-delay="300ms"
                                        >
                                            get your <span>passport</span> now
                                        </h2>
                                        <p
                                            data-animation="fadeInUp"
                                            data-delay="500ms"
                                        >
                                            Vestibulum eu vehicula elit, nec
                                            elementum orci. Praesent aliquet ves
                                            tibulum tempus. Pellentesque posuere
                                            pharetra turpis, eget finibus erat
                                            porta placerat.
                                        </p>
                                        <a
                                            href="#"
                                            className="btn credit-btn mt-50"
                                            data-animation="fadeInUp"
                                            data-delay="700ms"
                                        >
                                            Discover
                                        </a>
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
