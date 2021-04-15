import "./index.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Pricing from "./Pricing";
import Applications from "./Applications";
import About from "./About";
import Footer from "./Footer";
import Form from "./Form";
import { Helmet } from "react-helmet";
import { Route } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Route exact path="/" component={Home} />
                <Route exact path="/pricing" component={Pricing} />
                <Route exact path="/applications" component={Applications} />
                <Route exact path="/about" component={About} />
                <Route exact path="/xyzform" component={Form} />
            </div>
            <Footer />
            <Helmet>
                <meta charset="UTF-8" />
                <meta
                    name="description"
                    content="Online applications for new job listings and entrance exams"
                />
                <meta
                    name="keywords"
                    content="Cyber Cafe,Computers,Electronics"
                />
                <meta name="author" content="Sushant Yaharjit" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Helmet>
        </div>
    );
};

export default App;
