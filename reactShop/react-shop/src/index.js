import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Services from "./Services";

ReactDOM.render(
    <React.StrictMode>
        <Navbar />
        <Carousel />
        <Services />
        <Footer />
    </React.StrictMode>,
    document.getElementById("root")
);
