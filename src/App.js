import "./index.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Pricing from "./Pricing";
import Applications from "./Applications";
import About from "./About";
import Footer from "./Footer";
import Form from "./Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/pricing">
                            <Pricing />
                        </Route>
                        <Route exact path="/applications">
                            <Applications />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/xyzform">
                            <Form />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
