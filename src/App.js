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
        <Router basename="/">
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/pricing" component={Pricing} />
                        <Route
                            exact
                            path="/applications"
                            component={Applications}
                        />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/xyzform" component={Form} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
