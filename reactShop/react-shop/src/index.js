import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Navbar";
import Carousel from "./Carousel";

ReactDOM.render(
    <React.StrictMode>
        <Navbar />
        <Carousel />
    </React.StrictMode>,
    document.getElementById("root")
);
