import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Footer from "./footer";

ReactDOM.render(
    <React.StrictMode>
        <Navbar />
        <Carousel />
        <Footer />
    </React.StrictMode>,
    document.getElementById("root")
);
