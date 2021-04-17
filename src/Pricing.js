import "./index.css";
import { Helmet } from "react-helmet";
import keyboard from "./img/pricing/keyboard.jpg";
import mouse from "./img/pricing/mouse.png";
import webcam from "./img/pricing/webcam.jpg";
import mousepad from "./img/pricing/mousepad.jpg";
import antivirus from "./img/pricing/antivirus.jpg";
import pendrive from "./img/pricing/pendrive.jpg";
import headphone from "./img/pricing/headphone.jpg";
import speaker from "./img/pricing/speaker.jpg";
import react from "react";

class Pricing extends react.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pricing">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div
                                style={{ marginTop: "30px" }}
                                className="section-heading text-center mb-100 wow fadeInUp"
                                data-wow-delay="100ms"
                            >
                                <div className="line"></div>
                                <p>Take a look at our</p>
                                <h2>Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row-main">
                        <div className="col-sm-4 col-md-3 box-product-outer">
                            <div className="box-product">
                                <div className="img-wrapper">
                                    <a href="#">
                                        <img alt="Product" src={keyboard} />
                                    </a>
                                </div>
                                <h6>
                                    <a href="#">Keyboards</a>
                                </h6>
                                <div className="price">
                                    <div>
                                        Starting from{" "}
                                        <span className="price-down">
                                            {" "}
                                            ₹ 250
                                        </span>
                                    </div>
                                    {/* <span className="price-old">$15.00</span> */}
                                </div>
                                <span className="price-old">
                                    Minimum 30% OFF
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-3 box-product-outer">
                            <div className="box-product">
                                <div className="img-wrapper">
                                    <a href="#">
                                        <img alt="Product" src={mouse} />
                                    </a>
                                </div>
                                <h6>
                                    <a href="#">Mouse</a>
                                </h6>
                                <div className="price">
                                    <div>
                                        Starting from{" "}
                                        <span className="price-down">
                                            {" "}
                                            ₹ 80
                                        </span>
                                    </div>
                                    {/* <span className="price-old">$15.00</span> */}
                                </div>
                                <span className="price-old">
                                    Minimum 30% OFF
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-3 box-product-outer">
                            <div className="box-product">
                                <div className="img-wrapper">
                                    <a href="#">
                                        <img alt="Product" src={webcam} />
                                    </a>
                                </div>
                                <h6>
                                    <a href="#">Web-cam</a>
                                </h6>
                                <div className="price">
                                    <div>
                                        Starting from{" "}
                                        <span className="price-down">
                                            {" "}
                                            ₹ 600
                                        </span>
                                    </div>
                                    {/* <span className="price-old">$15.00</span> */}
                                </div>
                                <span className="price-old">
                                    Minimum 30% OFF
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-3 hidden-sm hidden-xs box-product-outer">
                            <div className="box-product">
                                <div className="img-wrapper">
                                    <a href="#">
                                        <img alt="Product" src={mousepad} />
                                    </a>
                                </div>
                                <h6>
                                    <a href="#">Mouse Pad</a>
                                </h6>
                                <div className="price">
                                    <div>
                                        Starting from{" "}
                                        <span className="price-down">
                                            {" "}
                                            ₹ 30
                                        </span>
                                    </div>
                                    {/* <span className="price-old">$15.00</span> */}
                                </div>
                                <span className="price-old">
                                    Minimum 20% OFF
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row-main">
                        <div className="col-sm-4 col-md-3 box-product-outer">
                            <div className="box-product">
                                <div className="img-wrapper">
                                    <a href="#">
                                        <img alt="Product" src={pendrive} />
                                    </a>
                                </div>
                                <h6>
                                    <a href="#">Pendrives</a>
                                </h6>
                                <div className="price">
                                    <div>
                                        Starting from{" "}
                                        <span className="price-down">
                                            {" "}
                                            ₹ 250
                                        </span>
                                    </div>
                                    {/* <span className="price-old">$15.00</span> */}
                                </div>
                                <span className="price-old">
                                    Minimum 40% OFF
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-3 hidden-xs box-product-outer">
                            <div className="box-product">
                                <div className="img-wrapper">
                                    <a href="#">
                                        <img alt="Product" src={antivirus} />
                                    </a>
                                </div>
                                <h6>
                                    <a href="#">Antivirus</a>
                                </h6>
                                <div className="price">
                                    <div>
                                        Starting from{" "}
                                        <span className="price-down">
                                            {" "}
                                            ₹ 325
                                        </span>
                                    </div>
                                    {/* <span className="price-old">$15.00</span> */}
                                </div>
                                <span className="price-old">
                                    Minimum 30% OFF
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-3 hidden-xs box-product-outer">
                            <div className="box-product">
                                <div className="img-wrapper">
                                    <a href="#">
                                        <img alt="Product" src={headphone} />
                                    </a>
                                </div>
                                <h6>
                                    <a href="#">Headphones</a>
                                </h6>
                                <div className="price">
                                    <div>
                                        Starting from{" "}
                                        <span className="price-down">
                                            {" "}
                                            ₹ 250
                                        </span>
                                    </div>
                                    {/* <span className="price-old">$15.00</span> */}
                                </div>
                                <span className="price-old">
                                    Minimum 30% OFF
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-3 hidden-sm hidden-xs box-product-outer">
                            <div className="box-product">
                                <div className="img-wrapper">
                                    <a href="#">
                                        <img alt="Product" src={speaker} />
                                    </a>
                                </div>
                                <h6>
                                    <a href="#">Speakers</a>
                                </h6>
                                <div className="price">
                                    <div>
                                        Starting from{" "}
                                        <span className="price-down">
                                            {" "}
                                            ₹ 300
                                        </span>
                                    </div>
                                    {/* <span className="price-old">$15.00</span> */}
                                </div>
                                <span className="price-old">
                                    {/* <strong className="price-down">Sale</strong>{" "} */}
                                    Minimum 40% OFF
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Helmet>
                    <link
                        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                        rel="stylesheet"
                    />
                </Helmet>
            </div>
        );
    }
}

export default Pricing;
