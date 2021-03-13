import "./index.css";
import placeholder from "./img/core-img/placeholder.png";
import message from "./img/core-img/message.png";
import call2 from "./img/core-img/call2.png";

function Navbar() {
    return (
        <div className="Navbar">
            <header class="header-area">
                <div class="top-header-area">
                    <div class="container h-100">
                        <div class="row h-100 align-items-center">
                            <div class="col-12 d-flex justify-content-between">
                                <div class="logo">
                                    <a href="index.html">
                                        <h2 class="logo_mahajan">
                                            Mahajan Cyber World
                                        </h2>
                                    </a>
                                </div>

                                <div class="top-contact-info d-flex align-items-center">
                                    <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title="Mugrala road, Dinanagar, Pb"
                                    >
                                        <img src={placeholder} alt="" />
                                        <span>Mugrala road, Dinanagar, Pb</span>
                                    </a>
                                    <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title="mahajan.cyber1@gmail.com"
                                    >
                                        <img src={message} alt="" />
                                        <span>mahajan.cyber1@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="credit-main-menu" id="sticker">
                    <div class="classy-nav-container breakpoint-off">
                        <div class="container">
                            <nav
                                class="classy-navbar justify-content-between"
                                id="creditNav"
                            >
                                <div class="classy-navbar-toggler">
                                    <span class="navbarToggler">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </div>
                                <div class="classy-menu">
                                    <div class="classycloseIcon">
                                        <div class="cross-wrap">
                                            <span class="top"></span>
                                            <span class="bottom"></span>
                                        </div>
                                    </div>
                                    <div class="classynav">
                                        <ul>
                                            <li>
                                                <a href="index.html">Home</a>
                                            </li>

                                            <li>
                                                <a href="post.html">Latest</a>
                                            </li>
                                            <li>
                                                <a href="services.html">
                                                    Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="services.html">
                                                    Pricing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="post.html">Reviews</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">
                                                    Contact
                                                </a>
                                            </li>
                                            <li>
                                                <a href="about.html">
                                                    About Us
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="contact">
                                    <a href="#">
                                        <img src={call2} alt="" />
                                        +91 98151 44 901
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
