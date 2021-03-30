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

const Pricing = () => {
    return (
        <div className="Pricing">
            <div class="container">
                <div className="row">
                    <div className="col-12">
                        <div
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
                    <div class="col-sm-4 col-md-3 box-product-outer">
                        <div class="box-product">
                            <div class="img-wrapper">
                                <a href="detail.html">
                                    <img alt="Product" src={keyboard} />
                                </a>
                            </div>
                            <h6>
                                <a href="#">Keyboards</a>
                            </h6>
                            <div class="price">
                                <div>
                                    Starting from{" "}
                                    <span class="price-down"> ₹ 600</span>
                                </div>
                                <span class="price-old">Minimum 40% OFF</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-3 box-product-outer">
                        <div class="box-product">
                            <div class="img-wrapper">
                                <a href="detail.html">
                                    <img alt="Product" src={mouse} />
                                </a>
                            </div>
                            <h6>
                                <a href="#">Mouse</a>
                            </h6>
                            <div class="price">
                                <div>
                                    Starting from{" "}
                                    <span class="price-down"> ₹ 600</span>
                                </div>
                                <span class="price-old">Minimum 40% OFF</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-3 box-product-outer">
                        <div class="box-product">
                            <div class="img-wrapper">
                                <a href="detail.html">
                                    <img alt="Product" src={webcam} />
                                </a>
                            </div>
                            <h6>
                                <a href="#">Web-cam</a>
                            </h6>
                            <div class="price">
                                <div>
                                    Starting from{" "}
                                    <span class="price-down"> ₹ 600</span>
                                </div>
                                <span class="price-old">Minimum 40% OFF</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-3 hidden-sm hidden-xs box-product-outer">
                        <div class="box-product">
                            <div class="img-wrapper">
                                <a href="detail.html">
                                    <img alt="Product" src={mousepad} />
                                </a>
                                <div class="option">
                                    <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title=""
                                        data-original-title="Add to Cart"
                                    >
                                        <i class="ace-icon fa fa-shopping-cart"></i>
                                    </a>
                                    <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title=""
                                        data-original-title="Compare"
                                    >
                                        <i class="ace-icon fa fa-align-left"></i>
                                    </a>
                                    <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title=""
                                        data-original-title="Wishlist"
                                    >
                                        <i class="ace-icon fa fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                            <h6>
                                <a href="#">Mouse Pad</a>
                            </h6>
                            <div class="price">
                                <div>
                                    Starting from{" "}
                                    <span class="price-down"> ₹ 600</span>
                                </div>
                                <span class="price-old">Minimum 40% OFF</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row-main">
                    <div class="col-sm-4 col-md-3 box-product-outer">
                        <div class="box-product">
                            <div class="img-wrapper">
                                <a href="detail.html">
                                    <img alt="Product" src={pendrive} />
                                </a>
                                <div class="option">
                                    <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title=""
                                        data-original-title="Add to Cart"
                                    >
                                        <i class="ace-icon fa fa-shopping-cart"></i>
                                    </a>
                                </div>
                            </div>
                            <h6>
                                <a href="#">Pendrives</a>
                            </h6>
                            <div class="price">
                                <div>
                                    Starting from{" "}
                                    <span class="price-down"> ₹ 600</span>
                                </div>
                                <span class="price-old">Minimum 40% OFF</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-3 hidden-xs box-product-outer">
                        <div class="box-product">
                            <div class="img-wrapper">
                                <a href="detail.html">
                                    <img alt="Product" src={antivirus} />
                                </a>
                                <div class="option">
                                    <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title=""
                                        data-original-title="Add to Cart"
                                    >
                                        <i class="ace-icon fa fa-shopping-cart"></i>
                                    </a>
                                    <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title=""
                                        data-original-title="Compare"
                                    >
                                        <i class="ace-icon fa fa-align-left"></i>
                                    </a>
                                    <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title=""
                                        data-original-title="Wishlist"
                                    >
                                        <i class="ace-icon fa fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                            <h6>
                                <a href="#">Antivirus</a>
                            </h6>
                            <div class="price">
                                <div>
                                    Starting from{" "}
                                    <span class="price-down"> ₹ 600</span>
                                </div>
                                <span class="price-old">Minimum 40% OFF</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-3 hidden-xs box-product-outer">
                        <div class="box-product">
                            <div class="img-wrapper">
                                <a href="detail.html">
                                    <img alt="Product" src={headphone} />
                                </a>
                                <div class="option">
                                    <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title=""
                                        data-original-title="Add to Cart"
                                    >
                                        <i class="ace-icon fa fa-shopping-cart"></i>
                                    </a>
                                    <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title=""
                                        data-original-title="Compare"
                                    >
                                        <i class="ace-icon fa fa-align-left"></i>
                                    </a>
                                    <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title=""
                                        data-original-title="Wishlist"
                                    >
                                        <i class="ace-icon fa fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                            <h6>
                                <a href="#">Headphones</a>
                            </h6>
                            <div class="price">
                                <div>
                                    Starting from{" "}
                                    <span class="price-down"> ₹ 600</span>
                                </div>
                                <span class="price-old">Minimum 40% OFF</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-3 hidden-sm hidden-xs box-product-outer">
                        <div class="box-product">
                            <div class="img-wrapper">
                                <a href="detail.html">
                                    <img alt="Product" src={speaker} />
                                </a>
                                <div class="option">
                                    <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title=""
                                        data-original-title="Add to Cart"
                                    >
                                        <i class="ace-icon fa fa-shopping-cart"></i>
                                    </a>
                                    <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title=""
                                        data-original-title="Compare"
                                    >
                                        <i class="ace-icon fa fa-align-left"></i>
                                    </a>
                                    <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title=""
                                        data-original-title="Wishlist"
                                    >
                                        <i class="ace-icon fa fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                            <h6>
                                <a href="#">Speakers</a>
                            </h6>
                            <div class="price">
                                <div>
                                    Starting from{" "}
                                    <span class="price-down"> ₹ 600</span>
                                </div>
                                <span class="price-old">
                                    {/* <strong className="price-down">Sale</strong>{" "} */}
                                    Minimum 40% OFF
                                </span>
                            </div>
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
};

export default Pricing;
