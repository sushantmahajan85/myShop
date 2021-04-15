import "./index.css";
import placeholder from "./img/core-img/placeholder.png";
import message from "./img/core-img/message.png";
import call2 from "./img/core-img/call2.png";
import { Helmet } from "react-helmet";
import react from "react";
import { Link } from "react-router-dom";

class Navbar extends react.Component {
    constructor() {
        super();

        this.state = {
            display: false,
        };
    }
    w3_open() {
        this.setState({ display: !this.state.display });
    }

    w3_close() {
        this.setState({ display: !this.state.display });
    }

    render() {
        let ham_class = this.state.display ? "w3-sidebar-on" : "w3-sidebar";
        return (
            <div className="Navbar">
                <header className="header-area">
                    <div className="top-header-area">
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 d-flex justify-content-between">
                                    <div className="logo">
                                        <a href="/">
                                            <h2 className="logo_mahajan">
                                                Mahajan Cyber World
                                            </h2>
                                        </a>
                                    </div>

                                    <div className="top-contact-info d-flex align-items-center">
                                        <a
                                            href="#"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Mugrala road, Dinanagar, Pb"
                                        >
                                            <img src={placeholder} alt="" />
                                            <span>
                                                Mugrala road, Dinanagar, Pb
                                            </span>
                                        </a>
                                        <a
                                            href="#"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="mahajan.cyber1@gmail.com"
                                        >
                                            <img src={message} alt="" />
                                            <span>
                                                mahajan.cyber1@gmail.com
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="credit-main-menu" id="sticker">
                        <div className="classy-nav-container breakpoint-off">
                            <div className="container">
                                <nav
                                    className="classy-navbar justify-content-between"
                                    id="creditNav"
                                >
                                    <div className={ham_class} id="mySidebar">
                                        <button
                                            onClick={() => this.w3_close()}
                                            className="w3-bar-item w3-large"
                                        >
                                            Close &times;
                                        </button>
                                        <a
                                            href="#"
                                            className="w3-bar-item w3-button"
                                        >
                                            Link 1
                                        </a>
                                        <a
                                            href="#"
                                            className="w3-bar-item w3-button"
                                        >
                                            Link 2
                                        </a>
                                        <a
                                            href="#"
                                            className="w3-bar-item w3-button"
                                        >
                                            Link 3
                                        </a>
                                    </div>

                                    <div className="w3-teal">
                                        <button
                                            className="w3_teal"
                                            onClick={() => this.w3_open()}
                                        >
                                            ☰
                                        </button>
                                    </div>
                                    <div className="classy-menu">
                                        <div className="classycloseIcon">
                                            <div className="cross-wrap">
                                                <span className="top"></span>
                                                <span className="bottom"></span>
                                            </div>
                                        </div>
                                        <div className="classynav">
                                            <ul>
                                                <li>
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link to="/applications">
                                                        Applications
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/services">
                                                        Services
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/pricing">
                                                        Pricing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/contact">
                                                        Contact
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/about">
                                                        About Us
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="contact">
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
                <Helmet>
                    <link
                        rel="stylesheet"
                        href="https://www.w3schools.com/w3css/4/w3.css"
                    />
                    <script
                        src="/js/jquery/jquery-2.2.4.min.js"
                        type="text/javascript"
                    ></script>
                    <script
                        src="/js/bootstrap/popper.min.js"
                        type="text/javascript"
                    ></script>
                    <script
                        src="/js/bootstrap/bootstrap.min.js"
                        type="text/javascript"
                    ></script>
                    <script
                        src="./js/plugins/plugins.js"
                        type="text/javascript"
                    ></script>
                    <script src="/js/active.js" type="text/javascript"></script>
                </Helmet>
            </div>
        );
    }
}
// function Navbar() {}

export default Navbar;
