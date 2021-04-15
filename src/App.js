import "./index.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Pricing from "./Pricing";
import Applications from "./Applications";
import About from "./About";
import Footer from "./Footer";
import Form from "./Form";
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
        </div>
    );
};

export default App;
